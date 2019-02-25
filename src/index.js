var self = {};
var http = require("http");
var path = require("path");

http.createServer(self.function(self.req(),self.res()),self.res().sendFile(
	path.join(__dirname + "source/index.html")
),
self.res().end()).listen(8080);
