// eval将字符串按语句解析，因此这里执行了一个空语句
console.log(typeof eval('{}')); // 'undefined'

// 模板将"${}"内部的代码理解为表达式，因此这里返回了空对象
console.log(`${{}}`); // '[object Object]'