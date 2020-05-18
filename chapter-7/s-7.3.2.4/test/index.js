var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised, versions} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    return Promise.require('../1.js').then(() => {
      expect(output.stdout).to.be.equal("100\n");
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    return Promise.require('../2.js').then(() => {
      expect(output.stdout).to.be.equal("result in thenableObj2\n");
    });
  });

  it('When await apply to thenable object', ()=> {
  	// 引用自示例1（../1.js）
	var x = {
	  result: 100,
	  then: function(resolve) {
	    resolve(this.result);  // return result as <value>
	  }
	};

	// 当x是thenable对象时，直接使用“await x”并不会取到x所代理的数据
	async function foo() {  // <- NOTE: 这里有一个字符`{`错误（书面印刷看不出来呵）
	  // 可以替代的代码
	  var value = await Promise.resolve(x);
	  return value;
	}

    return foo().then(value => {
      expect(value).to.be.equal(x.result);
    });
  });
});
