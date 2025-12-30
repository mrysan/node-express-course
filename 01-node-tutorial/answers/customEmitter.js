const EventEmitter = require("events");
const emitter = new EventEmitter();
setInterval(() => {
  let date = new Date();
  emitter.emit(
    "printTime",
    `It is currently ${date.toLocaleTimeString()} on the day ${date.toLocaleDateString()} `
  );
}, 4000);

emitter.on("boot", (msg) => {
  console.log(msg);
});

emitter.on("printTime", (msg) => console.log(msg));
emitter.emit("boot", "The script is running!");
