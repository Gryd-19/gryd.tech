const axios = require('axios');
const env = require('dotenv').config();
async function query_ipinfo(ip) {
    try {
        const res = await axios.get(`https://ipinfo.io/${ip}`, {
            headers: { Authorization: `Bearer ${process.env.IPINFO_TOKEN}` }
        });
        //console.log(res);
        return res;
    }
    catch (error) {
        console.error(error);
        return 'error';
    }
}
module.exports= query_ipinfo;