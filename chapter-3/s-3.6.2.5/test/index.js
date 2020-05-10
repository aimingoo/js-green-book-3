var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter = '3.6.2.4', ref = `../../s-${refChapter}`;

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    let srcContext = load(`${ref}/1.js`) + '\n\n' + load('../1.js');
    eval(srcContext);
    expect(output.stdout.split("\n")).to.be.eql([
      "call by instance.",
      "static method in ClassType types.",
      "static method in Class types.",
      ""]);
  });

  // Common defines in case 2~3
  let Meta, MetaClass;

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    // pick Meta() into current context only
    let srcContext = load(`${ref}/1.js`);
    let execContext = '(function() {\n' + srcContext + '\nreturn Meta;})';
    expect(Meta = eval(execContext)()).to.be.a("function");

    // pick MetaClass() into current context only
    srcContext = load('../2.js');
    execContext = '(function() {\n' + srcContext + '\nreturn MetaClass;})';
    expect(MetaClass = eval(execContext)()).to.be.a("function");

    // run testcase
    expect(()=>{
        var arrayMethods = Object.getOwnPropertyDescriptors(Array.prototype);
        class NativeAtom extends MetaClass {}
        class ArrayAtom extends new NativeAtom(Object.create(null, arrayMethods)) {}
        // 测试
        var atom = new ArrayAtom();
        atom.push(0,1,2,3,4,5);
        console.log(atom.join());  // 0,1,2,3,4,5
        console.log(Meta.isAtom(atom)); // true
    }).not.be.throw();
    expect(output.stdout).to.be.equal('0,1,2,3,4,5\ntrue\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    // load `../3.js`, and run testcases in current context
    expect(()=>eval(load('../3.js'))).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "prototype method in MetaList.",
      "prototype method in MetaListEx.",
      "method in ListObject.",
      "true",
      "false",
      "true",
      "false",
      ""]);
  });
});