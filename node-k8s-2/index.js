var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/service-2/action-1', function (req, res) {
    res.send('This is service 2 and action 1');
});
app.get('/service-2/action-2', function (req, res) {
    res.send('This is service 2 and action 2');
});

var server = app.listen(3002, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});