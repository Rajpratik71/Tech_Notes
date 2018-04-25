var express = require('express');
var app = express();
var github = require('./mod_github_api');

app.get('/', function(req, res)
{

//res.send('Hello World!');

var user_info_promise = github.get_user_details("mattjcamp");
user_info_promise.then(function(result) {
    userDetails = result;
    console.log("Initialized user details");
    res.send(userDetails.location);
}, function(err) {
    console.log(err);
})



});

var server = app.listen(3000,function() {});

