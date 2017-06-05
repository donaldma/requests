var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg', console.log('Downloading image...'))
  .on('error', function(err) {
    throw err
  })
  .on('response', function(response) {
    console.log('Response Status Code:', response.statusCode);
    console.log('Downlaoding complete');
  })
  .pipe(fs.createWriteStream('./future.jpg'));