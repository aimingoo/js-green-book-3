var expect = require('chai').expect;
var {resolved: chapter, versions} = require('chapter');

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Base case for array.length property', ()=> {
    expect(Object.getOwnPropertyDescriptor(new Array, 'length')).to.be.eql({
      value: 0,
      writable: true,
      enumerable: false,
      configurable: false
    });
  });

  it('More case ...', function() {
    if (versions('node', '< 10')) return this.skip(); // FORCE VERSION CHECK

    // 创建空数组
    var arr = [1,2,3]; // OR, new Array()

    // 置length属性为只读
    Object.defineProperty(arr, 'length', {writable: false});

    // 尝试pop/push
    expect(()=>arr.pop()).be.throw(TypeError, 'assign');
  });
});
