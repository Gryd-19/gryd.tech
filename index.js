const express = require('express');
const path = require('path');
const requestIp = require('request-ip');
const app = express();
const query_coinmarket =require('./query_coinmarket.js');
const query_ipinfo=require('./query_ipinfo.js');
const port = 80;

app.use(express.static(path.join(__dirname, '/public')));

app.get("/crypto", async(req,res)=>{
  let coin=req.query.coin;
  coin=coin.replace(/[^a-zA-Z]+/g, '');
  let value=await query_coinmarket(coin);
  console.log(value);
  res.json({value:value,coin:coin});
});

app.get("/ip-simple",async(req,res)=>{
   let ip= requestIp.getClientIp(req).split(':').pop();
   res.json({'ip':ip});
});

app.get("/ip",async(req,res)=>{
  let ip= requestIp.getClientIp(req).split(':').pop();
  let data=await query_ipinfo(ip);
  data.data.value=true;
  res.json(data.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});