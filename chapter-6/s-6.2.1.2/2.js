// 例3

// 所有四种有包装类的值类型数据
var values =  [100, 'hello, world!', true, Symbol()];
values.map(value => new Object(value))
  .forEach(obj => console.log(typeof obj, obj));