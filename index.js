const express = require('express')
const path = require('path')
const app = express()
const query_coinmarket =require('./query_coinmarket.js');
const port = 80

app.use(express.static(path.join(__dirname, '/public')));
app.get("/crypto", async(req,res)=>{
let coin=req.query.coin;
coin=coin.replace(/[^a-zA-Z]+/g, '');
console.log(coin.length);
let value=await query_coinmarket(coin);
console.log(value);
res.json({value:value,coin:coin});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})