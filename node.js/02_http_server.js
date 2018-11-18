
// EXAMPLE WEB SERVER THAT READS AND RETURNS USER PARAMETER
// COULD USE THIS TO SET UP API INTERFACE
// THE REQUEST STRING LOOKS LIKE THIS:
// http://localhost:8080/?year=2018&month=09
// WHEN YOU SEND PARAMETERS LIKE THIS YOU CAN REFERENCE THEM IN CODE 
// ATTRIBUTES

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World");
    res.write("<br/>");
    res.write(req.url);
    res.write("<br/>");
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);

}).listen(8080);
