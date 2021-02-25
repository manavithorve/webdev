var http = require("http");

http.createServer(function (req,res){

	res.writeHead(200, "Content-Type: text/html" );
	res.end("<b> <center>require module</b><br>var http = require('http'); </center>");

}).listen(8080);

console.log("Server Started...");
