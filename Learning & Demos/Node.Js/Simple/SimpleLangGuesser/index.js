var franc = require('franc')
var langs = require('langs');
const input = process.argv[2];

let decipher = franc(input);
let langcode = langs.where("3", decipher);
console.log(`The text is in ${langcode.name}`);

