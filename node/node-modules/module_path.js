const path = require ("path");

/*Node assumes that path is a built in module if filepath is not give like
./path, ../path OR ./subfolder/path */

var pathObj = path.parse(__filename);

console.log(pathObj);
