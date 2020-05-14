// 在对象及其原型链上查找属性的属主对象
// （引自../s-6.5.4.2/1.js）
var getPropertyOwner = function f(obj, key) {
  return !obj ? null
    : obj.hasOwnProperty(key) ? obj
    : f(Object.getPrototypeOf(obj), key)
}

// 从对象（以及其原型）中删除属性
function deepDeleteProperty(obj, key) {
  if (!(key in obj)) return false;
  while (obj = getPropertyOwner(obj, key)) {
    if (!Reflect.deleteProperty(obj, key)) return false
  }
  return true;
}

// 创建实例
var baseObj = Object.create({value: 100});
var obj1 = Object.create(baseObj);
var obj2 = Object.create(baseObj);

// 重写
obj1.value = 200;
console.log(obj1.value); // 200
console.log(obj2.value); // 100

// 删除成员'value'
// (注意将导致所有“相同原型的子类对象”的该成员被删除)
deepDeleteProperty(obj1, 'value');
console.log(obj1.value); // undefined
console.log(obj2.value); // undefined