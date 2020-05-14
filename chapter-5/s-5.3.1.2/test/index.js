var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('More cases for default parameters', output => {
    console.log = global_console_log; // reset default console.log
    // 默认参数可以有任意多个，并且可以放在任意位置
    function foo(v1, v2=null, v3, v4=1, v5) {
      console.log(v1, v2, v3, v4, v5);
    }

    // 调用时可以使用直接默认尾部参数，或者对中间的参数使用undefined值来表示默认
    //  - v2使用undefined表示默认; v4默认为1; v5没有默认值所以为undefined
    expect(()=>foo("V1", undefined, "V3")).not.be.throw();
    expect(output.stdout).to.be.equal('V1 null V3 1 undefined\n');

    // 从第一个第二个参数默认参数（默认参数v2）开始不再计入aFunction.length值
    expect(foo.length).to.be.equal(1);
  });
});