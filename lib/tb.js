var size = process.argv.slice(2, 3);

module.exports = function(){
  //exports the following functions to wherever they are required
  //in this example they are required in cheers.js
  convertTb();
  //calls the printHelp function
  process.exit(1);
  //exits the process when printHelp is done executing
}

function convertTb(){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + size + ' ' + 'terabyte(s) is: \n')
  console.log(' ' + size * 8000000000000 + ' Bits\n')
  console.log(' ' + size * 1000000000000 + ' Bytes\n')
  console.log(' ' + size * 1000000000 + ' KB\n')
  console.log(' ' + size * 1000000 + ' MB\n')
  console.log(' ' + size * 1000 + ' GB\n')
  console.log(' ' + size / 1000 + ' PB\n')
  console.log('__________________________________________\n')
}
