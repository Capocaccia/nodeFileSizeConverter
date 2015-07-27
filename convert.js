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

if (size[0] === "table"){
  console.log("\n 8 bits = 1 byte \n 1000 bytes = 1 KB \n 1000 KB = 1 MB \n 1000 MB = 1 GB \n 1000 GB = 1 TB \n 1000 TB = 1 PB")
}

if(size[0] === 'help'){
  help()
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

// if(format[0] === "gb"){
//   convertTb()
// }

function convertB(){
  console.log('_____________________________________\n' + '\nYour file with a size of ' + size + ' ' + 'bit(s) is: \n')
  console.log(' ' + size / 8 + ' Bytes')
  console.log(' ' + size / 8000 + ' KB')
  console.log(' ' + size / 8000000 + ' MB')
  console.log(' ' + size / 8000000000 + ' GB')
  console.log(' ' + size / 8000000000000 + ' TB')
  console.log(' ' + size / 8000000000000000 + ' PB')
  console.log('__________________________________________\n')
}


function convertBy(){
  console.log('______________________________________\n' + '\nYour file with a size of ' + size + ' ' + 'byte(s) is: \n')
  console.log(' ' + size * 8 + ' Bits')
  console.log(' ' + size / 1000 + ' KB')
  console.log(' ' + size / 1000000 + ' MB')
  console.log(' ' + size / 1000000000 + ' GB')
  console.log(' ' + size / 1000000000000 + ' TB')
  console.log(' ' + size / 1000000000000000 + ' PB')
  console.log('__________________________________________\n')
}


function convertKb(){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + size + ' ' + 'kilobyte(s) is: \n')
  console.log(' ' + size * 8000 + ' Bits\n')
  console.log(' ' + size * 1000 + ' Bytes\n')
  console.log(' ' + size / 1000 + ' MB\n')
  console.log(' ' + size / 1000000 + ' GB\n')
  console.log(' ' + size / 1000000000 + ' TB\n')
  console.log(' ' + size / 1000000000000 + ' PB\n')
  console.log('__________________________________________\n')
}

function convertMb(){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + size + ' ' + 'megabyte(s) is: \n')
  console.log(' ' + size * 8000000 + ' Bits\n')
  console.log(' ' + size * 1000000 + ' Bytes\n')
  console.log(' ' + size * 1000 + ' KB\n')
  console.log(' ' + size / 1000 + ' GB\n')
  console.log(' ' + size / 1000000 + ' TB\n')
  console.log(' ' + size / 1000000000 + ' PB\n')
  console.log('__________________________________________\n')
}

function convertGb(){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + size + ' ' + 'gigabyte(s) is:\n' )
  console.log(' ' + size * 8000000000 + ' Bits\n')
  console.log(' ' + size * 1000000000 + ' Bytes\n')
  console.log(' ' + size * 125000 + ' KB\n')
  console.log(' ' + size * 125 + ' MB\n')
  console.log(' ' + size / 1000 + ' TB\n')
  console.log(' ' + size / 1000000 + ' PB\n')
  console.log('__________________________________________\n')
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


