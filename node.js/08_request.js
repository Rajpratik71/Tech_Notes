
// SENDS REQUEST AND GETS A RESPONSE
// npm install request

var request = require("request");

request("http://www.google.com", function(error, response, body)
{
    console.log(body);
});
