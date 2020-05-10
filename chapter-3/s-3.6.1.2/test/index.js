var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("[object YourObjectClassname]\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("invalid\nNaN\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal("true\ntrue\ntrue\nfalse\nfalse\ntrue\ntrue\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\nfalse\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 5', output => {
    expect(()=>require('../5.js')).not.be.throw();
    expect(output.stdout).to.be.equal('2\n1,2,3\n4\n1\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6', output => {
    expect(()=>require('../6.js')).not.be.throw();

    // get a error message
    var error_message;
    try {
      let s = null;
      [...s];
    }
    catch(e) {
      error_message = e.message;
    }
    expect(output.stdout).to.be.equal(`1\n3\n3\n${error_message}\n`);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 7', output => {
    expect(()=>require('../7.js')).not.be.throw();
    expect(output.stdout).to.be.equal('hello,world\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 8', output => {
    expect(()=>require('../8.js')).not.be.throw();
    expect(output.stdout).to.be.equal('hello,world\nhi,friend\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 9', output => {
    eval(load('../9.js'));
    expect(output.stdout).to.be.equal('abc.e true\n');
    expect(()=>{
      // 异常
      try {
        ''.endsWith(rx);
      }
      catch(e) {
        // console.log(e.message);  // "TypeError:... "
        throw e;
      }
    }).be.throw(TypeError)
  });

  fancy.stdout().stderr().
  it('More checks', output => {
    // 总是可以对所有函数使用instanceof运算：
    // > Function.prototype[Symbol.hasInstance]
    expect(Function.prototype[Symbol.hasInstance]).to.be.a('function');

    // 下例揭示了...指向一个名为[Symbol.split]的函数
    // > console.log((new RegExp)[Symbol.split])
    expect((new RegExp)[Symbol.split]).to.be.a('function');

    // 以及更多的秘密：
    // > console.log(Object.getOwnPropertySymbols(RegExp.prototype));
    // [Symbol(Symbol.match), Symbol(Symbol.replace), ...
    expect(Object.getOwnPropertySymbols(RegExp.prototype)).to.be.include.members([
      Symbol.match, Symbol.replace // and more...
    ]);
  });
});