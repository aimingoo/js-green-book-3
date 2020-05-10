var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.throw();
    expect(obj['abc.def']).to.be.equal(123);
  });

  it('Recheck testcase 2', ()=> {
    expect(()=>require('../2.js')).not.throw();
    expect(obj).has.own.property('value', 100);
  });

  it('Recheck testcase 3', ()=> {
    eval(load('../3.js'));
    expect(profile).to.be.eql({career: "programmer", age: 32});
    expect(me).to.be.eql({profile});
    expect(info).to.be.eql(profile);
  });

  it('Recheck testcase 4', ()=> {
    expect(()=>require('../4.js')).not.throw();
  });
});