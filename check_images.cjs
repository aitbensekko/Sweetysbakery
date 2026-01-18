const https = require('https');

const checkUrl = (url) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', () => {
            resolve({ url, status: 'error' });
        });
    });
};

const run = async () => {
    const promises = [];
    for (let i = 1; i <= 30; i++) {
        const url = `https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(${i}).JPG`;
        promises.push(checkUrl(url));
    }

    const results = await Promise.all(promises);
    const valid = results.filter(r => r.status === 200).map(r => r.url);
    const fs = require('fs');
    fs.writeFileSync('valid_images.json', JSON.stringify(valid, null, 2));
    console.log('Done');
};

run();
