var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function (res, req) {
    req.send('Trang test scan QR code, nhưng không có gì ở đây hết :D ');
})

app.get('/hr-qrcode', function (res, req) {
    try {
        req.sendFile(__dirname + '/index.html');
    } catch (error) {
        console.log('error', error)
    }
})

