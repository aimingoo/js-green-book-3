// 1. 下例说明NUL字符在JavaScript中的真实性
str1 = String.fromCharCode(0, 0, 0, 0, 0);
str2 = '\0\0\0\0\0';

//  - 显示字符串长"5", 表明NUL字符在字符串中是真实存在的
console.log(str1.length);
console.log(str2.length);

// 2. 如果当前字符集为UTF-8，则将显示字符串长"2"
console.log("\u{20BB7}".length);

// 3. 空字符串与其他字符串一样也可以用作对象成员名
obj = {
  '': 100
}
// - 显示该成员的值: 100
console.log(obj['']);

