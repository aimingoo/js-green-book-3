var expect = require('chai').expect;
var {resolved: chapter, promised, versions} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  it('Recheck testcase 1 - syntax check only', ()=> {
    expect(()=>require('../1-1.js')).not.be.throw();
    expect(()=>require('../1-2.js')).not.be.throw();
  });

  it('Recheck testcase 2', ()=> {
    return Promise.require('../2.js').then(value => {
      expect(value).to.be.equal("v3: 01");
    });
  });

  it('Recheck testcase 3', function() {
    if (versions('node', '<10')) return this.skip(); // FORCE VERSION CHECK
    return Promise.require('../3.js').then(value => {
      expect(value).to.be.equal("v3: 01");
    });
  });
});
