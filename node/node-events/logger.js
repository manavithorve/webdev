
const EventEmitter = require("events");
var url = "http://";

class Logger extends EventEmitter{
  // function log() is not allowed inside a class
  log(message){
    console.log("New message for you!\n",message);
    this.emit("messageLogged",{id:1, url:url});
  }
}

module.exports = Logger;
