
//Better to store the modules as constant!
//Because when var is used the value could be overriden!!

const logger = require("./own_module");
// node automatically search for own_module.js

console.log(logger); //print logger module info
logger.log("Hello user!"); // call the function log() which belongs to logger module
