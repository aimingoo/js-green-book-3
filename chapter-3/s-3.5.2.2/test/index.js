var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;


describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    eval(load('../1.js'));
    expect(output.stdout.split('\n').map(x=>x.split(',').sort())).to.deep.have.members([
      "value,writable,enumerable,configurable".split(',').sort(),
      "get,set,enumerable,configurable".split(',').sort(),
      ["oldValue"],
      [""]]);

    // 步骤三：（测试）尝试再次声明data属性，
    //  - 由于在步骤一中已经置configurable为false，因此导致异常(can't redefine)。
    expect(()=>{
      Object.defineProperty(obj, 'data', {value: 100});
    }).be.throw(TypeError, 'redefine'); // Cannot redefine property: data
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal('false\n100\nnewValue\ntrue\n100\n');
  });
});