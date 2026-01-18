const https = require('https');

const getBody = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

const run = async () => {
    console.log('Fetching https://sweetysbakery.com ...');
    try {
        const html = await getBody('https://sweetysbakery.com');
        console.log('Fetched ' + html.length + ' bytes.');

        // Match image srcs
        const regex = /src=["'](.*?\.(?:jpg|jpeg|png))["']/gi;
        let match;
        const images = new Set();
        while ((match = regex.exec(html)) !== null) {
            images.add(match[1]);
        }

        const fs = require('fs');
        const found = Array.from(images);
        fs.writeFileSync('found_images.txt', found.join('\n'));
        console.log(`Saved ${found.length} images to found_images.txt`);

    } catch (e) {
        console.error('Error:', e.message);
    }
};

run();

run();
