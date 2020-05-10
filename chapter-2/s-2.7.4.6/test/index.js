var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  // fancy.stdout().stderr().
  it('Assignment to constant variable will throw TypeError', ()=> {
    expect(() => {
      eval('const x = 5; x = 8;')
    }).be.throw(TypeError);
  });

  it('Assignment to value will throw ReferenceError', ()=> {
    expect(() => {
      eval('8 = 8;')
    }).be.throw(ReferenceError);
  });

  it('Syntax checks', ()=> {
    expect(() => {
      new Function("let { x, y, 1: {a} } = 1"); 
    }).not.be.throw();

    expect(() => {
      new Function("let { `a`: a } = 1");
    }).be.throw(SyntaxError);

    expect(() => {
      function foo({x, y}) {
        // ...
      }
      try {
        //...
      }
      catch({message, code}) {
        console.log(message);
      }
    }).not.be.throw();
  });

  it('Using number literals as property name', ()=> {
    expect(function() {
        return { 12e3: 100 };
    }()).to.be.eql({"12000": 100});
  });
});
