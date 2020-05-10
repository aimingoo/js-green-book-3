var buff = new ArrayBuffer(4);

// 将buff的字节0置为整数10
var arr = new Int8Array(buff);
arr[0] = 10;

// arr与view实际上是buff的两个视图，操作的是同一块数据
var view = new DataView(buff);
console.log(view.getInt8(0)); // 10

// 通过视图（或TypedArray）存取buff中的数据
view.setInt16(0, 0x1234);
console.log(view.getInt8(1).toString(16)); // 34
