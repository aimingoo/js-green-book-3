var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1 - value operation', output => {
    // 示例１：分析对象运算过程中, 运算是否产生包装行为
    eval(load("../1.js"));  // load `x` to current context

    // 1. instanceof运算不对原数据进行"包装"
    expect(x instanceof Number).to.be.false;

    // 2. 如下将导致异常, 因为不能对值类型数据做in运算
    expect(()=> {
      'toString' in x
    }).be.throw();

    // 3. 成员存取运算时, "包装"行为发生在存取行为过程中
    expect(x.constructor).to.be.a('function');
    expect(x['constructor']).to.be.a('function');

    // 4. 所谓方法调用, 其实是成员存取后的函数调用运算, 因此"包装"行为发生的时期同上
    expect(()=>x.toString()).not.be.throw();

    // 5. 做delete运算时, "包装"行为仍然发生在成员存取时
    expect(delete x.toString).to.be.a("boolean");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require("../2.js")).not.be.throw();
    expect(output.stdout).to.be.equal("object 100\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require("../3.js")).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      `string : ${[   'string', 'object', false, true ].join()}`,
      `number : ${[   'number', 'object', false, true ].join()}`,
      `boolean : ${[  'boolean', 'object', false, true ].join()}`,
      `function : ${[ 'function', 'function', true, true ].join()}`,
      `object : ${[   'object', 'object', true, true ].join()}`,
      `object : ${[   'object', 'object', true, true ].join()}`,
      `object : ${[   'object', 'object', true, true ].join()}`,
      `symbol : ${[   'symbol', 'object', false, true ].join()}`,
      ""]);
  });
});