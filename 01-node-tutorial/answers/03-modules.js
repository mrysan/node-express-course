const names = require("./04-names.js");
const sayWazzup = require("./05-utils.js");
const familyGuy = require("./06-alternative-flavor.js");
const mindGrenade = require("./07-mind-grenade.js");

console.log("King of the Hill family:");
for (key in names) {
  console.log(names[key]);
}

console.log("Family Guy characters:");
for (key in familyGuy) {
  sayWazzup(familyGuy[key]);
}
