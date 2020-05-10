var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Check array features', ()=> {
    let arr = new Array(10);
    expect(arr).to.have.lengthOf(10);
    expect(new Set(arr)).include(undefined).and.have.property('size', 1);

    // 该语法在JavaScript中会得到包含两个元素的一个一维数组
    arr = new Array(10, 10);
    expect(arr).to.be.eql([10, 10]);

    // 它的大小是2×2
    arr = [[1,2],[3,4]];
    expect(arr).to.have.lengthOf(2);
    arr.forEach(x => expect(x).to.have.lengthOf(2));

    // 这种语法...只是返回arr[3]这个元素
    arr = [0,1,2,3,4,5];
    expect(arr[1,2,3]).to.be.equal(3);

    // 试图访问交错数组的某个下标分量，应该用类似如下的语法    
    arr = [,[,,[,,,"abc"]]];
    expect(arr[1][2][3]).to.be.eql('abc');
    // 或模板赋值语法
    var {1:{2:{3:x}}} = arr;
    expect(x).to.be.eql('abc');
  });
});
