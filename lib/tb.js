module.exports = function(params){
  //exports the following functions to wherever they are required
  //in this example they are required in convert.js
  convertTb(params);
  //calls the function
  process.exit(1);
  //exits the process when the function is done executing
}

function convertTb(params){
  console.log('__________________________________________\n' + '\nYour file with a size of ' + params[0] + ' ' + 'terabyte(s) is: \n')
  console.log(' ' + params[0] * 8000000000000 + ' Bits\n')
  console.log(' ' + params[0] * 1000000000000 + ' Bytes\n')
  console.log(' ' + params[0] * 1000000000 + ' KB\n')
  console.log(' ' + params[0] * 1000000 + ' MB\n')
  console.log(' ' + params[0] * 1000 + ' GB\n')
  console.log(' ' + params[0] / 1000 + ' PB\n')
  console.log('__________________________________________\n')
}
