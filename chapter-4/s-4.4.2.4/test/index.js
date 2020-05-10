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
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "value: 102",
      "value: 103",
      "value: 104",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "value: 100",
      "value: 101",
      "value: 102",
      "value: 103",
      "value: 104",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "value: 102",
      "value: 103",
      "value: 104",
      ""]);
  });

  it('Recheck testcase 4', ()=> {
    expect(()=>require('../4.js')).not.be.throw();
  });

  it('Recheck testcase 5', ()=> {
    expect(()=>require('../4.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6', output => {
    expect(()=>require('../6.js')).not.be.throw();
    expect(output.stdout).to.be.equal('102\n103\n104\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 7', output => {
    expect(()=>require('../7.js')).not.be.throw();
    expect(output.stdout).to.be.equal('102\n103\n104\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 8', output => {
    expect(()=>require('../8.js')).not.be.throw();
    expect(output.stdout).to.be.equal('1\n2\n3\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 9 - part 1', (output, done) => {
    let timerQueue = new Array, setTimeout = inject_setTimeout(timerQueue);
    expect(()=>eval(load('../9-1.js'))).not.be.throw();
    return Promise.all(timerQueue)
      .then(()=> {
        expect(output.stdout).to.be.equal('1\n2\n3\n');
      })
      .then(done, done); // .finally(done);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 9 - part 2', (output, done) => {
    let timerQueue = new Array, setTimeout = inject_setTimeout(timerQueue);
    // 如果for语句中使用var x声明的话，x的值将总是3
    expect(()=>eval(load('../9-2.js'))).not.be.throw();
    return Promise.all(timerQueue)
      .then(()=> {
        expect(output.stdout).to.be.equal('3\n3\n3\n');
      })
      .then(done, done); // .finally(done);
  });
});