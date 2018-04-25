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
    // Use user details from here
    console.log(userDetails.location)
    res.send(userDetails.location);
    //res.send("reached");
}, function(err) {
    console.log(err);
})



});

var server = app.listen(3000,function() {});

