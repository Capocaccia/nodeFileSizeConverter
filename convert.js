#!/usr/bin/env node

// bits = b
// bytes = by
// Kilobyte = kb
// Megabyte = mb
// Gigabyte = gb
// Terabyte = tb
// Pentabyte = pb

var help = require('./help/help');
var convertB = require('./lib/b');
var convertBy = require('./lib/by');
var convertKb = require('./lib/kb');
var convertMb = require('./lib/mb');
var convertGb = require('./lib/gb');
var convertTb = require('./lib/tb');
var size = process.argv.slice(2, 3);
var format = process.argv.slice(3, 4);

if (size[0] === "table"){
  console.log("\n 8 bits = 1 byte \n 1000 bytes = 1 KB \n 1000 KB = 1 MB \n 1000 MB = 1 GB \n 1000 GB = 1 TB \n 1000 TB = 1 PB")
}

if(size[0] === 'help'){
  help()
}

if(size[0] && !format[0]){
  console.log('\n')
  console.log(' ' + 'Error:\n')
  console.log(' ' + "The file format was missing or entered incorrectly.");
  console.log(' ' + "If you need more information, please reference the help docs by typing: node convert.js help");
}


if(format[0] === "b"){
  convertB()
}

if(format[0] === "by"){
  convertBy()
}

if(format[0] === "kb"){
  convertKb()
}

if(format[0] === "mb"){
  convertMb()
}

if(format[0] === "gb"){
  convertGb()
}

if(format[0] === "tb"){
  convertTb()
}

// function convertTb(){
//   console.log('\n')
//   console.log(' ' + '////////////////////////\n' + 'Your file sized ' + size + ' ' + format + ' is:\n')
//   console.log(' ' + size * 8000000000 + ' Bits\n')
//   console.log(' ' + size * 1000000000 + ' Bytes\n')
//   console.log(' ' + size * 125000 + ' KB\n')
//   console.log(' ' + size * 125 + ' MB\n')
//   console.log(' ' + size / 1000 + ' TB\n')
//   console.log(' ' + size / 1000000 + ' PB\n')
// }


