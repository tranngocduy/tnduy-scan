var express = require('express');
var app = express();

app.get('/', function (res, req) {
    req.send('Trang test scan QR code, nhưng không có gì ở đây hết :D ');
})

var port = process.env.port || 3000;

app.listen(port);