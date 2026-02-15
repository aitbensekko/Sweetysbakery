
const https = require('https');

const imageUrls = [
    'https://m.media-amazon.com/images/I/91YrLTBnMcL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61PVl9OMPPL._SL1351_.jpg',
    'https://m.media-amazon.com/images/I/61eUSfKnceL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81QpXcPUtmL._SX679_.jpg' // Updated URL from file
];

function checkUrl(url) {
    return new Promise((resolve) => {
        const req = https.get(url, (res) => {
            console.log(`${url}: ${res.statusCode}`);
            resolve(res.statusCode);
        });

        req.on('error', (e) => {
            console.error(`${url}: Error - ${e.message}`);
            resolve(500);
        });

        req.end();
    });
}

async function run() {
    console.log('Checking image URLs...');
    for (const url of imageUrls) {
        await checkUrl(url);
    }
}

run();
