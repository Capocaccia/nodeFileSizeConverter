module.exports = function(params){
  //exports the following functions to wherever they are required
  //in this example they are required in cheers.js
  convertB(params);
  //calls the printHelp function
  process.exit(1);
  //exits the process when printHelp is done executing
}

function convertB(params){
  console.log('_____________________________________\n' + '\nYour file with a size of ' + params[0] + ' ' + 'bit(s) is: \n')
  console.log(' ' + params[0] / 8 + ' Bytes')
  console.log(' ' + params[0] / 8000 + ' KB')
  console.log(' ' + params[0] / 8000000 + ' MB')
  console.log(' ' + params[0] / 8000000000 + ' GB')
  console.log(' ' + params[0] / 8000000000000 + ' TB')
  console.log(' ' + params[0] / 8000000000000000 + ' PB')
  console.log('__________________________________________\n')
}
