var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abc@12345",
  database: "mydb"
});

con.connect(function(err) {
	if (err) throw err;
	con.query("SELECT * FROM customers", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		console.log(fields);
  });
});
