
const EventEmitter = require("events");
const emitter = new EventEmitter();

//Register event
emitter.on("messageLogged",(arg) => {
    console.log("messageLogged: ",arg);
});

//optional
// emitter.on("messageLogged",function(arg){
//     console.log("messageLogged: ",arg);
// });

emitter.emit("messageLogged",{id:1, url:"http://"});
