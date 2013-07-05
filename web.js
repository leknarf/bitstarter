var express = require('express');
var fs = require('fs');

var filename = 'index.html';

var hello_buffer = fs.readFileSync(filename);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello_buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
