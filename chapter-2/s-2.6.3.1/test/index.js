var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Effect into inner block', ()=> {
    expect(()=>require('../1.js')).be.throw(SyntaxError);
  });

  it('Uneffect of outer block', ()=> {
    expect(()=>require('../2.js')).not.be.throw();
  });

  it('Effect to arguments', ()=> {
    expect(()=>require('../3.js')).be.throw(SyntaxError);
  });

  it('Directive and empty lines at head first', ()=> {
    expect(()=>require('../4.js')).be.throw();
  });

  it('Invalid directive when empty statements at head first', ()=> {
    expect(()=>require('../5.js')).not.be.throw();
  });
});
