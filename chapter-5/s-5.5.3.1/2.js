// 在global对象上创建一个标识符m
m = 'global name';

// 创建常量m，覆盖掉上一个标识符
const m = 1000;
console.log(m); // 1000

// m 作为属性并没有被重写
console.log(global.hasOwnProperty('m'), global.m); // true, 'global name'

// global.m可写
global.m = m + 1; // 1001

// m不可写
try {
  m = m + 1;
}
catch(e) {
  console.log(e.message); // TypeError: Assignment to constant variable.
}

// m不可删除
console.log(delete m);  // false

// global.m可删除
console.log(delete global.m); // true