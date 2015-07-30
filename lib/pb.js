var size = process.argv.slice(2, 3);

module.exports = function(){
  //exports the following functions to wherever they are required
  //in this example they are required in cheers.js
  convertPb();
  //calls the printHelp function
  process.exit(1);
  //exits the process when printHelp is done executing
}

function convertPb(){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + size + ' ' + 'pentabyte(s) is: \n')
  console.log(' ' + size * 8000000000000000 + ' Bits\n')
  console.log(' ' + size * 1000000000000000 + ' Bytes\n')
  console.log(' ' + size * 1000000000000 + ' KB\n')
  console.log(' ' + size * 1000000000 + ' MB\n')
  console.log(' ' + size * 1000000 + ' GB\n')
  console.log(' ' + size * 1000 + ' TB\n')
  console.log('__________________________________________\n')
}
