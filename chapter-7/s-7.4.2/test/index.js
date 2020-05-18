var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, versions} = require('chapter');

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('Simple operation for SharedArrayBuffer', output => {
    let length = 24; // any length value

    // length值以byte为单位，指定创建的sab的字节长度。
    sab = new SharedArrayBuffer(length)

    // 该对象的字节长度，即是new创建时的length值。只读。
    console.log(sab.byteLength)

    // 用于从sab中得到buffer的片断副本
    let begin = 3, end = 12;
    sab2 = sab.slice(begin, end);  // 参考Array.prototype.slice()
    expect(sab.byteLength).to.be.equal(length);
    expect(sab2.byteLength).to.be.equal(end-begin);

    view = new DataView(sab);
    arr = new Int32Array(sab);

    view.setInt32(0, 10, true);
    // console.log(arr[0].toString(16)); // a000000
    console.log(arr[0]); // 10

    expect(output.stdout).to.be.equal(`${length}\n10\n`);
  });
});
