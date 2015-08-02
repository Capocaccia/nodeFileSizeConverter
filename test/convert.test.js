var assert = require("assert")
var should = require('chai').should();
var cp = require('child_process');
var fs = require('fs')

describe('arguments', function(){
    it('should return with with text if arguments are empty', function(){
      assert.equal(-1, [1,2,3].indexOf(5))
    })
  });

describe('CLI', function () {
  it('testing my testing', function (done) {
    cp.execFile('test/test.js', function (err, stdout) {
      fs.appendFile('test/test.txt', 'test,\n', function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
      stdout.should.equal('test');
      done();
    });
  });
});
// describe('CLI', function () {
//   it('testing my testing', function (done) {
//     cp.execFile('convert.js', function (err, stdout) {
//       stdout.should.equal('asdf');
//       done();
//     });
//   });
// });
