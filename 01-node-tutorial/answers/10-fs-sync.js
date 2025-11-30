const { readFileSync, writeFileSync } = require("fs");

writeFileSync("./temporary/fileA.txt", "Once upon a time there was a king.\n", {
  flag: "a",
});
writeFileSync(
  "./temporary/fileA.txt",
  "The king liked to only eat steak and chicken.\n",
  { flag: "a" }
);
writeFileSync("./temporary/fileA.txt", "The king died of Gout. The End.\n", {
  flag: "a",
});

const fileContents = readFileSync("./temporary/fileA.txt", "utf8");

console.log(fileContents);
