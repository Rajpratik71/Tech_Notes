
// USE THE SERVER FILE SYSTEM IN NODE
// TAKES AN HTML FILE STORED ON THE NODE SERVER AND PRESENTS IN THE RESPONSE

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('html_hello_world.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
