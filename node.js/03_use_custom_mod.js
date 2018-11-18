
// EXAMPLE WEB SERVER THAT USES A CUSTOM MODULE
// LOOK AT FILE mod_current_date.js TO SEE MODULE

var http = require('http');
var dt = require('./mod_current_date');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World");
    res.write("<br/>");
    res.write(dt.myDateTime());

}).listen(8080);
