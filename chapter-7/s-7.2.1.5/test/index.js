var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised} = require('chapter');

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Recheck testcase 1 - syntax check only', ()=> {
    expect(()=>new Function(load('../1.js'))).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Check .then with empty arguments', output => {
    // 得到一个promise
    p = Promise.resolve(100);

    // 通过Then链得到promise2，但onFulfilled、onRejected都未传入
    promise2 = p.then();

    // 由于没有函数来响应onFulfilled、onRejected，所以promise2将默认使用p所代理的值
    return promise2.then(console.log)
      .then(() => {
        expect(output.stdout).to.be.equal('100\n');
      });
  });

  fancy.stdout().stderr().
  it('About then-chain end with .catch method', output => {
    // 得到一个rejected的promise，使用定制的对象作为reason
    p = Promise.reject({message: "REJECTED"});

    // 在Then链中将用到的响应函数
    resolved = x=>x;
    rejected = reason=>console.log(reason.message);

    // 通过Then链得到promise3 
    promise3 = p.then(resolved).catch(rejected);

    return promise3.then(() => {
        expect(output.stdout).to.be.equal('REJECTED\n');
      });
  });

  fancy.stdout().stderr().
  it('About then-chain end with .catch method, detail', output => {
    // 得到一个rejected的promise，使用定制的对象作为reason
    p = Promise.reject({message: "REJECTED"});

    // 在Then链中将用到的响应函数
    resolved = x=>x;
    rejected = reason=>console.log(reason.message);

    // （如下是对上例最后一行的拆解）
    // promise3 = p.then(resolved).catch(rejected);

    // 注意p是rejected的，而p.then()调用中并没有传入rejected响应函数
    promise2 = p.then(resolved);

    // promise3是使用.catch()作为链尾得到的一个promise
    promise3 = promise2.catch(rejected);  // "REJECTED"

    return promise3.then(() => {
        expect(output.stdout).to.be.equal('REJECTED\n');
      });
  });
});