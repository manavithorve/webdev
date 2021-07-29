const fs = require("fs");

//var files = fs.readdirSync('./');

fs.readdir('./', function(err,files){
  if(err) console.log("Error: ", err);
  else console.log("Files are:", files);
});
