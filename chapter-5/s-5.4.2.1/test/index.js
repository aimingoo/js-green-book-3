var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_setTimeout = setTimeout;
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let inject_setTimeout = function(timerQueue) {
    return (f, t) => { // hijack
      timerQueue.push(new Promise((ok, err) => {
        global_setTimeout(() => {
          try { ok(f()) } catch(e) { err(e) }; // hijack
        }, t);
      }));
    };
  };

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    let process = { exit: x=>console.log("exit", x) }; // catcher
    expect(()=>eval(load('../1.js'))).not.be.throw();
    expect(output.stdout).to.be.equal("exit 0\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    let timerQueue = new Array, setTimeout = inject_setTimeout(timerQueue);

    let callback, thisObj2, srcContext = load('../2.js');
    let execContext = '(function() {\n' + srcContext + '\nreturn [callback, thisObj2];})';
    expect([callback, thisObj2] = eval(execContext)()).to.be.a("array");

    // 回调callback的一个绑定函数
    var thisObj1 = { name: "localy object 1" };
    setTimeout(callback.bind(thisObj1, 100), 1000);

    // 在回调中使用方法
    thisObj2.name = "localy object 2";
    setTimeout(thisObj2.callback, 1000);

    return Promise.all(timerQueue)
      .then(resolved => {
        expect(output.stdout.split("\n")).to.be.have.members([
          `Hi,  ${thisObj1.name}`,
          `hi,  ${thisObj2.name}`,
          "X:  100",
          "X:  200",
          ""]);
      });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      [ 'try call ', '.' ].join(","),
      "foo",
      ""]);
  });
});