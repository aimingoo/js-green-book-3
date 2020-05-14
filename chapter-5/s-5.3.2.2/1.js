// 示例4

function* myGenerator(x=0,y=0,z=0) {
  yield x * 2 + y * z;
}

var tor = myGenerator(1,2,3);

// 这个对象也被“理解成”生成器函数的实例
console.log(tor instanceof myGenerator); // true


// （续“示例4”）

// 示例4中的yield在第一次tor.next()时就会产生数值8
console.log(tor.next().value); // 8