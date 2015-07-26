#!/usr/bin/env node

var help = require('./help/help');

var size = process.argv.slice(2, 3);
var format = process.argv.slice(3, 4);

console.log(size);
console.log(format);

if (size[0] === "table" || "Table"){
  console.log(" 8 bits = 1 byte \n 1024 bytes = 1 KB \n 1024 KB = 1 MB \n 1024 MB = 1 GB \n 1024 GB = 1 TB \n 1024 TB = 1 PB")
}

if(size[0] === 'help' || 'Help'){
  help()
}


