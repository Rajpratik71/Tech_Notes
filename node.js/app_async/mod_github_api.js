
exports.get_user_details = function (username){
    
//function get_user_details (username) {

    var request = require("request");
    var userDetails;


    // Setting URL and headers for request
    var options = {
        url: 'https://api.github.com/users/mattjcamp',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
        // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })

}
    
    
    