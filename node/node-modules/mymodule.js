exports.myDateTime = function(){
	return Date()
};

var http = require("http");
var dt = require("./mymodule");

http.createServer(function(req,res){

res.writeHead(200,"Content-Type: text/html");
res.write("Hello! So the current time and date is: "+dt.myDateTime());
res.end();
}).listen(8080);

console.log("Server Started...");
