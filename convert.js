#!/usr/bin/env node



// I think I want to rewrite this whole thing.
//For example:  Set a v

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

// if(format[0] === "gb"){
//   convertTb()
// }

function convertB(){
  console.log('____________________________\n' + '\nYour file sized ' + size + ' ' + 'bit(s) is: ' + '\n____________________________\n')
  console.log(' ' + size / 8 + ' Bytes')
  console.log(' ' + size / 8000 + ' KB')
  console.log(' ' + size / 8000000 + ' MB')
  console.log(' ' + size / 8000000000 + ' GB')
  console.log(' ' + size / 8000000000000 + ' TB')
  console.log(' ' + size / 8000000000000000 + ' PB')
}


function convertBy(){
  console.log('_____________________________\n' + '\nYour file sized ' + size + ' ' + 'byte(s) is: ' + '\n_____________________________\n')
  console.log(' ' + size * 8 + ' Bits')
  console.log(' ' + size / 1000 + ' KB')
  console.log(' ' + size / 1000000 + ' MB')
  console.log(' ' + size / 1000000000 + ' GB')
  console.log(' ' + size / 1000000000000 + ' TB')
  console.log(' ' + size / 1000000000000000 + ' PB')
}


function convertKb(){
  console.log('_________________________________\n' + '\nYour file sized ' + size + ' ' + 'kilobyte(s) is: ' + '\n_________________________________\n')
  console.log(' ' + size * 8000 + ' Bits\n')
  console.log(' ' + size * 1000 + ' Bytes\n')
  console.log(' ' + size / 1000 + ' MB\n')
  console.log(' ' + size / 1000000 + ' GB\n')
  console.log(' ' + size / 1000000000 + ' TB\n')
  console.log(' ' + size / 1000000000000 + ' PB\n')
}

function convertMb(){
  console.log('_________________________________\n' + '\nYour file sized ' + size + ' ' + 'megabyte(s) is: ' + '\n_________________________________\n')
  console.log(' ' + size * 8000000 + ' Bits\n')
  console.log(' ' + size * 1000000 + ' Bytes\n')
  console.log(' ' + size * 1000 + ' KB\n')
  console.log(' ' + size / 1000 + ' GB\n')
  console.log(' ' + size / 1000000 + ' TB\n')
  console.log(' ' + size / 1000000000 + ' PB\n')
}

function convertGb(){
  console.log('_________________________________\n' + '\nYour file sized ' + size + ' ' + 'gigabyte(s) is: ' + '\n_________________________________\n')
  console.log(' ' + size * 8000000000 + ' Bits\n')
  console.log(' ' + size * 1000000000 + ' Bytes\n')
  console.log(' ' + size * 125000 + ' KB\n')
  console.log(' ' + size * 125 + ' MB\n')
  console.log(' ' + size / 1000 + ' TB\n')
  console.log(' ' + size / 1000000 + ' PB\n')
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


