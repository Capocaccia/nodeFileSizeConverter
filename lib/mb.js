module.exports = function(params){
  //exports the following functions to wherever they are required
  //in this example they are required in cheers.js
  convertMb(params);
  //calls the printHelp function
  process.exit(1);
  //exits the process when printHelp is done executing
}

function convertMb(params){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + params[0] + ' ' + 'megabyte(s) is: \n')
  console.log(' ' + params[0] * 8000000 + ' Bits\n')
  console.log(' ' + params[0] * 1000000 + ' Bytes\n')
  console.log(' ' + params[0] * 1000 + ' KB\n')
  console.log(' ' + params[0] / 1000 + ' GB\n')
  console.log(' ' + params[0] / 1000000 + ' TB\n')
  console.log(' ' + params[0] / 1000000000 + ' PB\n')
  console.log('__________________________________________\n')
}
