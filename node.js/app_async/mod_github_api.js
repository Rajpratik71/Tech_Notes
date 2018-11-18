
exports.get_user_details = function (username){
    
//function get_user_details (username) {

    var request = require("request");
    var userDetails;

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }

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
                sleep(5000);
                resolve(JSON.parse(body));
            }
        })
    })

}
    
    
    