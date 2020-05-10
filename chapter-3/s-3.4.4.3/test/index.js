var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Recheck testcase 1, and try direct write ArrayBuffer', ()=> {
    eval(load('../1.js'));
    expect(buff[0]).to.to.equal('a');
    expect(buff).have.own.property('0');

    let view = new DataView(buff);
    expect(view.getInt8(0)).to.not.be.equal('a'.charCodeAt(0));
    expect(view.getInt8(0)).to.be.equal(0); // @see CreateByteDataBlock() in ECMA.
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal('10\n34\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('1\n"hello"\n');
  });
});