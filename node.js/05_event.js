
// EXAMPLE OF NODE EVENT

var fs = require('fs');

var readStream = fs.createReadStream('./readme.md');

/*Write to the console when the file is opened:*/
readStream.on('open', function () {
  console.log('The file is open');
});

console.log("Something");
