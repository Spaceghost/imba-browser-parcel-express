var http = require("http");
var path = require("path");

//create a server object:
http
  .createServer(function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
