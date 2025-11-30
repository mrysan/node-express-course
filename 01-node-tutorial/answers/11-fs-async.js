const { writeFile } = require("fs");
console.log("at start");

writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
  if (err) {
    console.log("This error happened: ", err);
    return;
  }
  console.log("line 1 completed");
  writeFile(
    "./temporary/fileB.txt",
    "This is line 2\n",
    { flag: "a" },
    (err, result) => {
      if (err) {
        console.log("This error happened: ", err);
        return;
      }
      console.log("line 2 completed");
      writeFile(
        "./temporary/fileB.txt",
        "This is line 3\n",
        { flag: "a" },
        (err, result) => {
          if (err) {
            console.log("This error happened: ", err);
            return;
          }
          console.log("line 3 completed");
        }
      );
    }
  );
});
// appears as second line because writeFile is async, rest of the script keeps running
console.log("at end");
