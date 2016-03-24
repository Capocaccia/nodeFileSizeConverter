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

switch (params[0]){
  case "table":
    console.log("\n 8 bits = 1 byte \n 1000 bytes = 1 KB \n 1000 KB = 1 MB \n 1000 MB = 1 GB \n 1000 GB = 1 TB \n 1000 TB = 1 PB")
    break;
  case "help":
    help();
    break;
}

switch (params[1]){
  case "b":
    convertB(params);
    break;
  case "by":
    convertBy(params);
    break;
  case "kb":
    convertKb(params);
    break;
  case "mb":
    convertMb(params);
    break;
  case "gb":
    convertGb(params);
    break;
  case "tb":
    convertTb(params);
    break;
  case "pb":
    convertPb(params);
}

if(params[0] !== "table" && !params[1]){
  console.log('\n');
  console.log(' ' + 'Error:\n');
  console.log(' ' + "The file format was missing or entered incorrectly.");
  console.log(' ' + "Please correct the error and try again.");
  console.log(' ' + "If you need more information, please reference the help docs by typing: node convert.js help");
}

if(!params[0]){
  console.log('\n');
  console.log('Error: No arguments given.  Please reference the help docs below.\n');
  help()
}
