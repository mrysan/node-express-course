const os = require("os");

console.log(`The default system directory is: ${os.homedir()}`);
console.log(`The system kernel version is: ${os.version()}`);
console.log(`The operating system is: ${os.type()}`);
