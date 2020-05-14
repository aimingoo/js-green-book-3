var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);
  let util = require('util');

  fancy.stdout().stderr().
  it('The base features of array-liked object', output => {
    console.log = global_console_log; // reset default console.log

    // 创建array-like objects的方法
    var arr2 = Object.create(null, {length: {value: 0, writable: true}});
    // OR, 使一个普通对象成为array-like objects
    var obj = {length: 0};

    // 尝试调用Array.prototype上的方法
    expect(Array.prototype.push.call(arr2, ...'ABC')).to.be.equal(3);

    // 显示该对象（注意它没有被显示为一个数组）
    console.log(arr2);
    expect(output.stdout.split("\n")[0])
      .to.be.equal(util.format({...arr2})); // { '0': 'A', '1': 'B', '2': 'C' }

    // 类数组对象默认时未实现迭代器接口
    expect(()=>console.log(...arr2)).be.throw(TypeError, 'is not a function');

    // 使类数组对象可以被迭代
    arr2[Symbol.iterator] = Array.prototype[Symbol.iterator];

    // 尝试作为数组展开 - try again
    expect(()=>console.log(...arr2)).not.be.throw();
    expect(output.stdout.split("\n")[1])
      .to.be.equal(util.format(...'ABC')); // A B C

    // 返回参数的Symbol.iterator属性值
    var f = new Function('return arguments[Symbol.iterator]'), iter = f();

    // 它与上例中的与上一行中的argsarguments一样，都使用的是Array.prototype中的迭代器方法
    console.log(iter === arr2[Symbol.iterator]);
    expect(output.stdout.split("\n")[2]).to.be.equal('true'); // true
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('A B\n');
  });
});