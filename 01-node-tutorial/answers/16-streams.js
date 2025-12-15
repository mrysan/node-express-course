const { createReadStream } = require("fs");

let counter = 0;

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

stream.on("data", (result) => {
  console.log(result);
  counter++;
});

stream.on("end", () => {
  console.log(`Number of chunks received: ${counter}`);
});

stream.on("error", (error) => {
  console.log(error);
});
