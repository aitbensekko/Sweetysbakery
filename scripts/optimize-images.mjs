import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const BACKUP_DIR = path.join(__dirname, '../public/images_backup');

// Configuration
const MAX_WIDTH = 1200;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;

async function getFiles(dir) {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return files.flat();
}

async function optimizeImages() {
    console.log('🚀 Starting image optimization...');

    try {
        // 1. Create backup
        if (!fs.existsSync(BACKUP_DIR)) {
            console.log('📦 Creating backup folder:', BACKUP_DIR);
            await fs.promises.cp(IMAGES_DIR, BACKUP_DIR, { recursive: true });
        } else {
            console.log('ℹ️ Backup folder already exists. Skipping backup to avoid overwriting original backups.');
        }

        // 2. Scan for images
        const allFiles = await getFiles(IMAGES_DIR);
        const imageFiles = allFiles.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

        console.log(`🔍 Found ${imageFiles.length} images to process.`);

        let processed = 0;
        let savedBytes = 0;

        for (const file of imageFiles) {
            try {
                const metadata = await sharp(file).metadata();
                const originalSize = (await fs.promises.stat(file)).size;

                // Only resize if width is greater than MAX_WIDTH or if it's unusually large
                if (metadata.width > MAX_WIDTH || originalSize > 500 * 1024) { // > 500KB

                    const buffer = await sharp(file)
                        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, force: false }) // Only applies to JPEGs
                        .png({ quality: PNG_QUALITY, compressionLevel: 8, force: false }) // Only applies to PNGs
                        .webp({ quality: JPEG_QUALITY, force: false })
                        .toBuffer();

                    // Overwrite file
                    await fs.promises.writeFile(file, buffer);

                    const newSize = buffer.length;
                    const savings = originalSize - newSize;
                    savedBytes += savings;

                    console.log(`✅ Optimized: ${path.basename(file)} | ${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB | Saved: ${(savings / 1024).toFixed(1)}KB`);
                    processed++;
                } else {
                    console.log(`⏭️ Skipped (already small): ${path.basename(file)}`);
                }
            } catch (err) {
                console.error(`❌ Error processing ${path.basename(file)}:`, err.message);
            }
        }

        console.log('-----------------------------------');
        console.log(`🎉 Finished! Processed ${processed} images.`);
        console.log(`💾 Total space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
        console.log('-----------------------------------');

    } catch (error) {
        console.error('Fatal error:', error);
    }
}

optimizeImages();
