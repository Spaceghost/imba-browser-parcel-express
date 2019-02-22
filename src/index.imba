var http = require("http");
var path = require("path");

http
  .createServer function(req, res)
    res.sendFile(path.join(__dirname + "source/index.html"))
    res.end()
  .listen(8080)
