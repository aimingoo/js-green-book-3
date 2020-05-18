var expect = require('chai').expect;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Recheck testcase 1', ()=> {
    let x = new Object, cb = _=>eval(_); // catcher
    return Promise.require('../1.js', undefined, cb).then(value => {
      expect(value).to.be.equal(x);
    });
  });

  it('Recheck testcase 2', ()=> {
    let ok = true, x = new Object, cb = _=>eval(_); // catcher
    // NOTE: Promise.require()内使用的是eval，所以对同一模块是可以多次装载并执行的
    return Promise.require('../2.js', undefined, cb) // ok is true
      .then(value => {
        expect(value).to.be.equal(x);
        ok = false; // set `ok` to false
        return Promise.require('../2.js', undefined, cb);
      })
      .catch(e => {
        expect(e instanceof Error).to.be.true; // the exception throw 2.js
      });
  });

  it('Recheck testcase 3 - syntax check only', ()=> {
    expect(()=>new Function(load('../3.js'))).not.be.throw();
  });

  it('To reject in then-chain', ()=> {
    // 在Then链上reject一个promise
    let catcher, p = Promise.resolve();

    // 方法1
    promise2 = p.then(function foo() {
      throw catcher = new Error();
    });

    return promise2.catch(e => {
      expect(e).to.be.equal(catcher); // catcher ready too

      // 方法2
      let reason = new Object; // will check it
      promise2 = p.then(function foo() {
        return Promise.reject(reason);
      });

      return promise2.catch(e => {
        expect(e).to.be.equal(reason); // check reason
        // return 'done';
      });
    });
  });
});