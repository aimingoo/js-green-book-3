var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Hoisting declaration to current function', output => {
    let foo = "upper", bar = "upper";
    expect(function() {
      if (false) {
        function foo() {  // declare `foo` with value `undefined`
        }
      }
      else {
        function bar() {  // declare `bar`, and assignment a function at executing
        }
      }
      console.log(typeof foo, typeof bar);
    }).not.be.throw();
    expect(output.stdout).to.be.equal('undefined function\n');
  });
});
