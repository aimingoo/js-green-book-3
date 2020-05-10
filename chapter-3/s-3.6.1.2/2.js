// 方法2，字面量声明方法（也可以使用一般的属性声明）
var obj = {
  [Symbol.toPrimitive](hint) {
    if (hint == 'number') return NaN;
    return 'invalid';
  }
};

// 测试
console.log(''+obj);  // 'invalid'
console.log(+obj); // NaN
