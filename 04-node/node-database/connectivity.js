//var url= 'mysql'//locahost:3306/test'

var mysql = require("mysql");

var con = mysql.createConnection({

	host : "localhost",
	user : "root",
	password : "Abc@12345",
});

con.connect(function (err)
{
	if (err) throw err;
	console.log("Connected");
}); 
