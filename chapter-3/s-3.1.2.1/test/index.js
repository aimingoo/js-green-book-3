var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Define extends part in strict mode too', ()=> {
    // 在extends中的表达式（例如，字面量风格的函数表达式）是处于严格模式中的
    class MyObject extends function x() { xyz = 123; } {
      // ...
    }
    expect(function() {
      // 严格模式下向未声明变量赋值将导致异常
      new MyObject;
    }).be.throw(ReferenceError, 'xyz is not defined');
  });

  fancy.stdout().stderr().
  it('Class constructor method vs. traditional constructor', output => {
    // 特定的方法名来声明，亦即constructor
    class MyObject {
      constructor() {
        console.log('Constructing...');
      }
    }
    new MyObject;

    // 与如下效果类似
    function MyObject2() {
       console.log('Constructing...');
    }
    new MyObject2;

    // Check
    let output_stdout = output.stdout.split('\n')
    expect(output_stdout[0]).to.be.equal(output_stdout[1]);
  });
});
