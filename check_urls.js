
const https = require('https');

const urls = [
    "https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(5).JPG",
    "https://sweetysbakery.com/images/Sweetys%20Bakery%20IMG%20(5).JPG",
    "https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(5).jpg",
    "https://sweetysbakery.com/images/Sweetys%20Bakery%20IMG%20(5).jpg"
];

urls.forEach(url => {
    https.request(url, { method: 'HEAD' }, (res) => {
        console.log(`${res.statusCode} : ${url}`);
    }).on('error', (e) => {
        console.error(`Error checking ${url}: ${e.message}`);
    }).end();
});
