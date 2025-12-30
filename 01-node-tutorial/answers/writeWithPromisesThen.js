const { writeFile, readFile } = require("fs").promises;

const first = "Hi this is the first line";
const second = "Hi this is the second line";
const third = "Hi this is the third line";

const readWrite = async function () {
  try {
    await writeFile("./temporary/temp.txt", `${first}\n`, { flag: "a" }).then(
      () => {
        return writeFile("./temporary/temp.txt", `${second}\n`, {
          flag: "a",
        }).then(() => {
          return writeFile("./temporary/temp.txt", `${third}\n`, {
            flag: "a",
          }).then(() => {
            return readFile("./temporary/temp.txt", "utf8").then((result) => {
              console.log(result);
            });
          });
        });
      }
    );
  } catch (err) {
    console.log(`An error has occured: ${err}`);
  }
};

readWrite();
