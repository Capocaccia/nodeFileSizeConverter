module.exports = function(params){
  //exports the following functions to wherever they are required
  //in this example they are required in cheers.js
  convertPb(params);
  //calls the printHelp function
  process.exit(1);
  //exits the process when printHelp is done executing
}

function convertPb(params){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + params[0] + ' ' + 'pentabyte(s) is: \n')
  console.log(' ' + params[0] * 8000000000000000 + ' Bits\n')
  console.log(' ' + params[0] * 1000000000000000 + ' Bytes\n')
  console.log(' ' + params[0] * 1000000000000 + ' KB\n')
  console.log(' ' + params[0] * 1000000000 + ' MB\n')
  console.log(' ' + params[0] * 1000000 + ' GB\n')
  console.log(' ' + params[0] * 1000 + ' TB\n')
  console.log('__________________________________________\n')
}
