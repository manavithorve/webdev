var http = require("http");

http.createServer(function (req,res){

	res.writeHead(200,"Context-Type: text/html");
	res.write(req.url);
res.end();
}).listen(8080);

console.log("Server Started...");
