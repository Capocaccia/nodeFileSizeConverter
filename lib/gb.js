module.exports = function(params){
  //exports the following functions to wherever they are required
  //in this example they are required in convert.js
  convertGb(params);
  //calls the function
  process.exit(1);
  //exits the process when the function is done executing
}

function convertGb(params){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + params[0] + ' ' + 'gigabyte(s) is:\n' )
  console.log(' ' + params[0] * 8000000000 + ' Bits\n')
  console.log(' ' + params[0] * 1000000000 + ' Bytes\n')
  console.log(' ' + params[0] * 125000 + ' KB\n')
  console.log(' ' + params[0] * 125 + ' MB\n')
  console.log(' ' + params[0] / 1000 + ' TB\n')
  console.log(' ' + params[0] / 1000000 + ' PB\n')
  console.log('__________________________________________\n')
}
