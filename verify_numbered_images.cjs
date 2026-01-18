const https = require('https');
const fs = require('fs');

const TOTAL_IMAGES = 1151;
const CONCURRENCY = 50;
const BASE_URL_TEMPLATE = (i) => `https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(${i}).JPG`;

const checkUrl = (i) => {
    return new Promise((resolve) => {
        const url = BASE_URL_TEMPLATE(i);
        const req = https.request(url, { method: 'HEAD' }, (res) => {
            resolve({ i, url, status: res.statusCode });
        });

        req.on('error', (err) => {
            resolve({ i, url, status: 'ERROR', error: err.message });
        });

        req.end();
    });
};

const run = async () => {
    console.log(`Starting verification of ${TOTAL_IMAGES} images with concurrency ${CONCURRENCY}...`);

    const results = [];
    let activePromises = [];

    for (let i = 1; i <= TOTAL_IMAGES; i++) {
        const p = checkUrl(i).then(res => {
            // Remove self from activePromises
            activePromises.splice(activePromises.indexOf(p), 1);
            return res;
        });

        results.push(p);
        activePromises.push(p);

        if (activePromises.length >= CONCURRENCY) {
            await Promise.race(activePromises);
        }

        if (i % 100 === 0) {
            console.log(`Checked ${i}/${TOTAL_IMAGES}...`);
        }
    }

    // Wait for remaining
    const finalResults = await Promise.all(results);

    const found = finalResults.filter(r => r.status === 200);
    const missing = finalResults.filter(r => r.status === 404);
    const errors = finalResults.filter(r => r.status !== 200 && r.status !== 404);

    console.log('\nVerification Complete.');
    console.log(`Total: ${TOTAL_IMAGES}`);
    console.log(`Found (200 OK): ${found.length}`);
    console.log(`Missing (404): ${missing.length}`);
    console.log(`Errors/Other: ${errors.length}`);

    // Write reports
    fs.writeFileSync('found_numbered_images.txt', found.map(r => r.url).join('\n'));
    fs.writeFileSync('missing_numbered_images.txt', missing.map(r => r.url).join('\n'));

    if (errors.length > 0) {
        fs.writeFileSync('error_numbered_images.txt', errors.map(r => `${r.url} - ${r.status} ${r.error || ''}`).join('\n'));
        console.log('Errors written to error_numbered_images.txt');
    }

    console.log('Found URLs written to found_numbered_images.txt');
    console.log('Missing URLs written to missing_numbered_images.txt');
};

run();
