#!/usr/bin/env node

// bits = b
// bytes = by
// Kilobyte = kb
// Megabyte = mb
// Gigabyte = gb
// Terabyte = tb
// Pentabyte = pb

var help = require('./help/help');

var size = process.argv.slice(2, 3);
var format = process.argv.slice(3, 4);

// console.log(size);
// console.log(format);

// if (size[0] === "table" || "Table"){
//   console.log(" 8 bits = 1 byte \n 1024 bytes = 1 KB \n 1024 KB = 1 MB \n 1024 MB = 1 GB \n 1024 GB = 1 TB \n 1024 TB = 1 PB")
// }

// if(size[0] === 'help' || 'Help'){
//   help()
// }


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

function convertB(){
  console.log('\n')
  console.log(' ' + 'Your file sized ' + size + ' ' + format + ' is:\n')
  console.log(' ' + size * 0.125 + ' Bytes')
  console.log(' ' + size * 0.125 / 1000 + ' KB')
  console.log(' ' + size / 8000000 + ' MB')
  console.log(' ' + size / 8000000000 + ' GB')
  console.log(' ' + size / 8000000000000 + ' TB')
  console.log(' ' + size / 8000000000000000 + ' PB')
}


function convertBy(){
  console.log('\n')
  console.log(' ' + 'Your file sized ' + size + ' ' + format + ' is:\n')
  console.log(' ' + size * 8 + ' Bits')
  console.log(' ' + size / 1000 + ' KB')
  console.log(' ' + size / 1000000 + ' MB')
  console.log(' ' + size / 1000000000 + ' GB')
  console.log(' ' + size / 1000000000000 + ' TB')
  console.log(' ' + size / 1000000000000000 + ' PB')
}


function convertKb(){
  console.log('\n')
  console.log(' ' + 'Your file sized ' + size + ' ' + format + ' is:\n')
  console.log(' ' + size * 8000 + ' Bits\n')
  console.log(' ' + size * 1000 + ' Bytes\n')
  console.log(' ' + size * 0.1 / 100 + ' MB\n')
  console.log(' ' + size / 1000000 + ' GB\n')
  console.log(' ' + size / 1000000000 + ' TB\n')
  console.log(' ' + size / 1000000000000 + ' PB\n')
}

function convertMb(){
  console.log('\n')
  console.log(' ' + 'Your file sized ' + size + ' ' + format + ' is:\n')
  console.log(' ' + size * 8000000 + ' Bits\n')
  console.log(' ' + size * 1000000 + ' Bytes\n')
  console.log(' ' + size * 1000 + ' KB\n')
  console.log(' ' + size * 0.8 / 1000 + ' GB\n')
  console.log(' ' + size / 1000000 + ' TB\n')
  console.log(' ' + size / 1000000000 + ' PB\n')
}

function convertGb(){
  console.log('\n')
  console.log(' ' + 'Your file sized ' + size + ' ' + format + ' is:\n')
  console.log(' ' + size * 8000000000 + ' Bits\n')
  console.log(' ' + size * 1000000000 + ' Bytes\n')
  console.log(' ' + size * 125000 + ' KB\n')
  console.log(' ' + size * 125 + ' MB\n')
  console.log(' ' + size * 0.125 / 1000 + ' TB\n')
  console.log(' ' + size * 0.6 / 100000 + ' PB\n')
}


