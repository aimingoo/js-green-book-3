// 例2
var values =  [100, 'hello, world!', true];
var types = {number: Number, string: String, boolean: Boolean };
values.map(value => new types[typeof value](value))
  .forEach(obj => console.log(typeof obj, obj));
