const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(vhost('gryd.tech', function (req, res) {
    // handle req + res belonging to mail.example.com
    res.text('yes');
  }))