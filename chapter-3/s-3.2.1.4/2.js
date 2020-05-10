// 上述三张表可以分别用如下代码来列举：
tables = {
  // 表3-7, Object.prototype的成员
  "3-7": Object.getOwnPropertyNames(Object.prototype),

  // 表3-8, 构造器（函数）所具有的特殊成员
  "3-8": Object.getOwnPropertyNames(Function).concat(
         Object.getOwnPropertyNames(Function.prototype)),

  // 表3-9, Object()作为基类的类方法
  "3-9": Object.getOwnPropertyNames(Object)
}
console.log(tables);