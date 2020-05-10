var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  it('Implement Reflect.ownKeys', ()=> {
    // ownKeys(target) ... 可以使用如下类似代码替代实现
    function Reflect_ownKeys(target) {
      return Object.getOwnPropertySymbols(target)
        .concat(Object.getOwnPropertyNames(target));
    }
    var global = Function('return this')();
    // NOTE: By default, both arrays must be the same size. (@see `have` op in Chai.js)
    expect(Reflect_ownKeys(global)).to.have.members(Reflect.ownKeys(global));
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('100\naccess key name: value\n200\n1\n');
  });

  fancy.stdout().stderr().
  it('For test.mjs', output => {
    console.log = global_console_log; // reset default console.log
    require = require("@std/esm")(module,{"esm":"mjs"});

    expect(()=>require('../test.mjs')).not.be.throw();
    expect(output.stdout).to.be.equal('[INFO] - 1 access key name: value\n100\nundefined\n');
  });

  fancy.stdout().stderr().
  it('For test2.mjs', output => {
    console.log = global_console_log; // reset default console.log
    require = require("@std/esm")(module,{"esm":"mjs"});

    expect(()=>require('../test2.mjs')).not.be.throw();
    expect(output.stdout.split('\n')).to.be.eql([
      "[ Symbol(Symbol.toStringTag) ]",
      "[object Module]",
      ""]);
  });
});