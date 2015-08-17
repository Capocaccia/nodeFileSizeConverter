module.exports = function(params){
  //exports the following functions to wherever they are required
  //in this example they are required in convert.js
  convertBy(params);
  //calls the function
  process.exit(1);
  //exits the process when the function is done executing
}

function convertBy(params){
  console.log('______________________________________\n' + '\nYour file with a size of ' + params[0] + ' ' + 'byte(s) is: \n')
  console.log(' ' + params[0] * 8 + ' Bits')
  console.log(' ' + params[0] / 1000 + ' KB')
  console.log(' ' + params[0] / 1000000 + ' MB')
  console.log(' ' + params[0] / 1000000000 + ' GB')
  console.log(' ' + params[0] / 1000000000000 + ' TB')
  console.log(' ' + params[0] / 1000000000000000 + ' PB')
  console.log('__________________________________________\n')
}
