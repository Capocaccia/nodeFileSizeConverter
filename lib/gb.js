var size = process.argv.slice(2, 3);
var format = process.argv.slice(3, 4);

module.exports = function(){
  //exports the following functions to wherever they are required
  //in this example they are required in cheers.js
  convertGb();
  //calls the printHelp function
  process.exit(1);
  //exits the process when printHelp is done executing
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
