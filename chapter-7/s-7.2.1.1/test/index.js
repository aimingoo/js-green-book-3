var expect = require('chai').expect;
var {resolved: chapter, promised, timeouted} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Recheck testcase 1', ()=> {
    return Promise.require('../1.js', 'p').then(x => {
      expect(x).to.be.equal(100);
    });
  });

  it('Recheck testcase 2', ()=> {
    let resolved, catcher = new Promise(ok=>resolved=ok); // resolve a state
    process.on('unhandledRejection', resolved); // resolved when callback

    expect(()=>require('../2.js')).not.be.throw();
    return catcher.then(x => {
      expect(()=>{throw x}).be.throw(TypeError, 'cycle');
    });
  });

  it('Recheck testcase 3', ()=> {
    // 如果有unhandledRejection发生，将触发resolved
    let resolved, delayQueue = [new Promise(ok=>resolved=ok)]; // resolve a state
    process.on('unhandledRejection', resolved); // resolved when callback

    // 1s后超时，将返回passed
    let passed = new Object, setTimeout = timeouted(delayQueue);
    setTimeout(()=>passed, 1000);

    expect(()=>require('../3.js')).not.be.throw();
    return Promise.race(delayQueue)
      .then(x => { // either `passed` and `resolved`
        expect(x === passed).to.be.true;
      })
      .catch(console.log);
  });
});
