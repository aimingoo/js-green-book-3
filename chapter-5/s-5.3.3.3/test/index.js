var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, versions} = require('chapter');

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1 - function is object', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "true",
      "true", "true", "true",
      "function", "true", "true",
      ""]);
  });

  it('Recheck testcase 2 - dynamic function constructor', function() {
    if (versions('node', '< 10')) return this.skip(); // FORCE VERSION CHECK
    expect(()=>require('../2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    let AsyncFunction = (async x=>x).constructor;
    let srcContext = load('../3.js');
    let name, myFunc, execContext = '(function() {\n' + srcContext + '\nreturn [name, myFunc];})';

    expect([name, myFunc] = eval(execContext)()).to.be.a("array");
    return Promise.all([
        // calculated and promised
        myFunc(1,2).then(obj=>console.log("promised:", obj[name])),
        // myFunc的原型是AsyncFunction.prototype
        console.log(Object.getPrototypeOf(myFunc) === AsyncFunction.prototype) // true
      ])
      .then(() => {
        expect(output.stdout.split("\n")).to.be.include.members([
          "calculated: 3",
          "promised: 3",
          "true",
          ""]);
      });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4 - prototype point to self', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 5', output => {
    expect(()=>require('../5.js')).not.be.throw();
    expect(output.stdout).to.be.equal('false\ntrue\ntrue\n');
  });
});
