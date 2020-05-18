var expect = require('chai').expect;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  // set timeout to 8s for mochi
  this.timeout(8000);

  it('Recheck testcase 1', ()=> {
    return Promise.require('../1.js').catch(reason => {
      expect(reason).to.be.undefined; // reject from p
    });
  });

  it('Recheck testcase 2 - unhandle p and p2', ()=> {
    let resolved, catcher = new Promise(ok=>resolved=ok); // resolve a state
    process.removeAllListeners('unhandledRejection');

    // p once, and p2 once(p2 pushed by p.then)
    let ticks = [];
    process.on('unhandledRejection', (reason, p) => {
      ticks.push(p);
      if (ticks.length === 2) resolved(ticks); // a array result with times
      expect(ticks.length<3).to.be.true; // 应当只有两次
    });

    expect(()=>require('../2.js')).not.be.throw();
    return catcher.then(allRejected => {
      expect(allRejected.length).to.be.equal(2);
      expect(allRejected[0]).to.not.be.equal(allRejected[1]); // p !== p2
    });
  });

  it('Recheck testcase 3 - unhandle p2 only', ()=> {
    let resolved, catcher = new Promise(ok=>resolved=ok); // resolve a state
    process.removeAllListeners('unhandledRejection');   
    process.on('unhandledRejection', resolved); // p2 once only

    expect(()=>require('../3.js')).not.be.throw();
    return catcher.then(x => {
      expect(x).to.be.undefined; // the reason is undefined
    });
  });
});
