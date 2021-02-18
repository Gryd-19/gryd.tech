const axios = require('axios');
const env = require('dotenv').config();
async function query_coinmarket(coin) {
    try {
        console.log(coin);
        const res = await axios.get('https://pro-api.coinmarketcap.com/v1/tools/price-conversion', {
            params: {
                "symbol": coin,
                "amount": 1,
                "convert_id": 2781
            },
            headers: {
                "X-CMC_PRO_API_KEY": process.env.COINMARKET_KEY
            }
        });
        return res.data.data.quote['2781'].price;
    }
    catch (error) {
        console.error(error);
        return 'error';
    }
}
module.exports= query_coinmarket;