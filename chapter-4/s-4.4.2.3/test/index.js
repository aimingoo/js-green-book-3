var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('A syntax error in `switch` statement', ()=> {
    expect(()=>require('../1.js')).be.throw(SyntaxError);
  });

  it('A reference error in `switch` statement', ()=> {
    expect(()=>require('../2.js')).be.throw(ReferenceError);
  });

  it('A reference error in `switch` statement when let uninitialization', ()=> {
    expect(()=>require('../3.js')).be.throw(ReferenceError);
  });

  it('Success reference variants in `switch` statement', ()=> {
    expect(()=>require('../4-1.js')).not.be.throw();
    expect(()=>require('../4-2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('A bad case for variant reference', output => {
    expect(()=>require('../5.js')).not.be.throw();
    expect(output.stdout).to.be.equal("100\n");
  });
});