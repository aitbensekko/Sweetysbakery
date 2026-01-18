import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B0CTZBSHT8.01.LZZZZZZZ.jpg', name: 'milk-street-bakes.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B0FFHJ3P9M.01.LZZZZZZZ.jpg', name: 'christmas-cookies.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B00A3KPXVI.01.LZZZZZZZ.jpg', name: 'pies-mini-pies.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B09R6TP3QW.01.LZZZZZZZ.jpg', name: 'the-perfect-loaf.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B00IFHT31C.01.LZZZZZZZ.jpg', name: 'cupcake-muffin.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B08H4ZVN4V.01.LZZZZZZZ.jpg', name: 'american-girl-baking.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B0875LWBM5.01.LZZZZZZZ.jpg', name: '100-cookies.jpg' }
];

const downloadDir = path.join(__dirname, 'public', 'images', 'ebooks');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const downloadImage = (url, name) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(downloadDir, name);
        const file = fs.createWriteStream(filePath);

        https.get(url, function (response) {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${name}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { }); // Ignore unlink error
            console.error(`Error downloading ${name}:`, err.message);
            reject(err);
        });
    });
};

(async () => {
    console.log("Starting downloads...");
    for (const img of images) {
        try {
            await downloadImage(img.url, img.name);
        } catch (error) {
            console.error(error.message);
        }
    }
    console.log("All downloads attempt finished.");
})();
