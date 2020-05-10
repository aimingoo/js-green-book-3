var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Variant define using `var`', ()=> {
    expect(function() {
      var str = 'test';
      var x, y, num = 3 + 2 - 5;
      return [str, x, y, num].join();
    }()).to.equal("test,,,0");
  });

  it('Variant define in `for (var .. in ..`', ()=> {
    expect(function(n) {
      for (var n in {n});  // object equal `{n: "outer"}`
      return n;
    }("outer")).to.not.equal("outer");
  });

  it('Variant define in `for (let .. in ..`', ()=> {
    expect(function(i) {
      var catched = [];
      for (let i,j,k=0; k<100; k++) catched = [i, j, k];
      return [typeof i, typeof j, typeof k].concat(catched).join();
    }("outer")).to.equal("string,undefined,undefined,,,99");
  });

  it('Variant define by named function', ()=> {
    expect(function() {
      function foo() {
        str = 'test';
      }
      return foo
    }()).to.be.a("function").and.satisfy(x=>x.name=="foo");
  });

  it('Variant define in catch block only', ()=> {
    expect(function() {
      try {
        throw typeof e;  // is undefined
      }
      catch (e) {
        return e; // string "undeifned" as exception object
      }
    }()).to.equal("undefined");
  });
});
