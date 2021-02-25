
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("logged",(data) => {
  console.log(data.name);
});

emitter.emit("logged",{id:123, name:"Manavi", address:"Pune"});
