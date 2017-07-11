'use strict'

const http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200, {'Context-Type': 'text/html'});
    res.write('Hello World!');
    res.write('Hello World!');
    res.end('Hello World!');
}).listen(8080);
