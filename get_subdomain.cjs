const fetch = require('node-fetch');

const ACCOUNT_ID = '7a0f1675b95401d9e22e1e122491fe7b';
const API_TOKEN = 'grAIrFFtprsV1mEFimbad__r6QAfKr5eBj2fxOL3';

async function getSubdomain() {
    try {
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/workers/subdomain`, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (data.success) {
            console.log(data.result.subdomain);
        } else {
            console.error('Error:', data.errors);
        }
    } catch (error) {
        console.error('Failed to fetch:', error);
    }
}

getSubdomain();
