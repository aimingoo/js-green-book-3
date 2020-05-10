// 字符串：通常是连续存储的
var str = 'abcd';

// 一般数组：通常不连续存储
var normalArr = str.split('');

// 类型化数组：在内存中有连续字节的空间作为数组元素
var typedArr = new Uint8Array(4);
typedArr.set(normalArr.map(c=>c.charCodeAt(0)));

// 测试
console.log(typedArr);  // [ 97, 98, 99, 100 ]
console.log(typedArr instanceof Array); // false, 表明Array不是它的父代类
