
const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B0CTZBSHT8.01.LZZZZZZZ.jpg', name: 'milk-street-bakes.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B0FFHJ3P9M.01.LZZZZZZZ.jpg', name: 'christmas-cookies.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B00A3KPXVI.01.LZZZZZZZ.jpg', name: 'pies-mini-pies.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B09R6TP3QW.01.LZZZZZZZ.jpg', name: 'the-perfect-loaf.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B00IFHT31C.01.LZZZZZZZ.jpg', name: 'cupcake-muffin.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B08H4ZVN4V.01.LZZZZZZZ.jpg', name: 'american-girl-baking.jpg' },
    { url: 'https://images-na.ssl-images-amazon.com/images/P/B0875LWBM5.01.LZZZZZZZ.jpg', name: '100-cookies.jpg' }
];

const downloadImage = (url, name) => {
    const file = fs.createWriteStream(path.join('public/images/ebooks', name));
    https.get(url, function (response) {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${name}`);
        });
    }).on('error', (err) => {
        fs.unlink(name);
        console.error(`Error downloading ${name}:`, err.message);
    });
};

images.forEach(img => downloadImage(img.url, img.name));
