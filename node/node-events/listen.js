
const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged",(arg)=>{
  console.log("ID: ",arg.id);
  console.log("Url: ",arg.url);
});

logger.log("Your details are: ");
