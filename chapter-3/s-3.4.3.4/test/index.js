var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "call me, and new.target is:  MyObject",
      "15",
      "Object",
      "call me, and new.target is:  targetConstructor",
      "300",
      "targetConstructor",
      ""]);
  });

  it('Recheck testcase 2', ()=> {
    eval(load("../2.js"));

    // 事实上Object.create()...的实现类似如下
    function Object_create(prototypeObj, propertyDescriptors) {
      var obj = Object.setPrototypeOf(new Object, prototypeObj);
      return Object.defineProperties(obj, propertyDescriptors);
    }

    var aInstance2 = Object_create(aPrototypeObject, {
      name2: {value: 'value2'},
      name3: {get: function() { return 'value3' }}
    });

    // 测试
    expect(aInstance).to.be.eql(aInstance2);
  });
});