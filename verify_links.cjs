const https = require('https');

const urls = [
    "https://www.kingarthurbaking.com/learn/guides/gluten-free",
    "https://www.healthline.com/nutrition/vegan-egg-substitute",
    "https://www.seriouseats.com/guide-to-dairy-free-milk",
    "https://www.kingarthurbaking.com/blog/2020/07/20/gluten-free-bread-baking",
    "https://minimalistbaker.com/one-bowl-vegan-chocolate-cake/",
    "https://www.seriouseats.com/gluten-free-chocolate-chip-cookies-recipe",
    "https://www.vegansociety.com/news/blog/20-amazing-things-you-can-do-aquafaba",
    "https://www.seriouseats.com/easy-gluten-free-pie-crust-recipe",
    "https://minimalistbaker.com/how-to-make-vegan-buttercream-frosting/",
    "https://www.kingarthurbaking.com/blog/2018/01/29/gluten-free-baking-mistakes"
];

let completed = 0;
let errors = 0;

console.log("Verifying URLs...");

urls.forEach(url => {
    const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        console.log(`[${res.statusCode}] ${url}`);
        if (res.statusCode >= 400) errors++;
        completed++;
        checkDone();
    });

    req.on('error', (e) => {
        console.error(`[ERROR] ${url}: ${e.message}`);
        errors++;
        completed++;
        checkDone();
    });

    req.end();
});

function checkDone() {
    if (completed === urls.length) {
        console.log(`\nFinished. ${errors} errors.`);
    }
}
