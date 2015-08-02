#!/usr/bin/env node

var help = require('./help/help');
var convertB = require('./lib/b');
var convertBy = require('./lib/by');
var convertKb = require('./lib/kb');
var convertMb = require('./lib/mb');
var convertGb = require('./lib/gb');
var convertTb = require('./lib/tb');
var convertPb = require('./lib/pb');
var params = process.argv.slice(2, 4);
//params[0] is the file size
//params[1] is the file type acronym

if (params[0] === "table"){
  console.log("\n 8 bits = 1 byte \n 1000 bytes = 1 KB \n 1000 KB = 1 MB \n 1000 MB = 1 GB \n 1000 GB = 1 TB \n 1000 TB = 1 PB")
}

if(params[0] === 'help'){
  help()
}

if(params[0] && !params[1]){
  console.log('\n')
  console.log(' ' + 'Error:\n')
  console.log(' ' + "The file format was missing or entered incorrectly.");
  console.log(' ' + "Please correct the error and try again.");
  console.log(' ' + "If you need more information, please reference the help docs by typing: node convert.js help");
}

if(!params[0]){
  console.log('\n')
  console.log('Error: No arguments given.  Please reference the help docs below.\n')
  help()
}

if(params[1] === "b"){
  convertB(params)
}

if(params[1] === "by"){
  convertBy(params)
}

if(params[1] === "kb"){
  convertKb(params)
}

if(params[1] === "mb"){
  convertMb(params)
}

if(params[1] === "gb"){
  convertGb(params)
}

if(params[1] === "tb"){
  convertTb(params)
}

if(params[1] === "pb"){
  convertPb(params)
}
