const { writeFile, readFile } = require("fs").promises;

const first = "Hi this is the first line";
const second = "Hi this is the second line";
const third = "Hi this is the third line";

const writer = async function () {
  try {
    await writeFile("./temporary/temp.txt", `${first}\n${second}\n${third}`);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const reader = async function () {
  try {
    const text = await readFile("./temporary/temp.txt", "utf8");
    console.log(text);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const readWrite = async function () {
  await writer();
  await reader();
};

readWrite();
