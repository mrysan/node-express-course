const path = require("path");
const os = require("os");

const homeDir = os.homedir();

const filePath = path.join(homeDir, "Documents", "Dev");
console.log(filePath);
