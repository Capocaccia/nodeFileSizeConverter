var size = process.argv.slice(2, 3);
var format = process.argv.slice(3, 4);

module.exports = function(){
  //exports the following functions to wherever they are required
  //in this example they are required in cheers.js
  convertBy();
  //calls the printHelp function
  process.exit(1);
  //exits the process when printHelp is done executing
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
