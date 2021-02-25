
const EventEmitter = require("events");
const emitter = new EventEmitter(); //making an instance of a class

//Register and event!
emitter.on("messageLogged",function(){
  console.log("Event Registered!");
}); // optional method addListener();

emitter.emit("messageLogged");   // event raised!
