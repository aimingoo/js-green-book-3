var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, versions} = require('chapter');

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("MyName\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("true\nMyName\n");
  });
});

// FORCE VERSION CHECK
(versions('node', '> 1') ? describe.skip
:describe)(`[${chapter.toUpperCase()}] Check points - es5 and below`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal("100\n100\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal("2\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 5', output => {
    let util = require('util');
    let expect_result = [1,3,5], args = {...expect_result};
    delete args.length;

    expect(()=>require('../5.js')).not.be.throw();
    expect(output.stdout).to.be.equal(`${util.format(expect_result, args)}\n`);
  });
});
