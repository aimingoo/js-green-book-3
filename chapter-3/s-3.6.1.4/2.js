function intrudeOnPrototype(Class, handler) {
  var orginal = Object.getPrototypeOf(Class.prototype);
  var target = Object.create(orginal);
  var {proxy, revoke} = Proxy.revocable(target, handler);
  Object.setPrototypeOf(Class.prototype, proxy);
  return ()=> revoke(Object.setPrototypeOf(Class.prototype, orginal));
}

var str = new String('OldString');
var recovery = intrudeOnPrototype(String, {
  get: function(target, prop) {
    if (prop === 't') return 100;
    return Reflect.get(...arguments);
  }
});
var str2 = new String('NewString');  // Or str2='NewString'

// 测试1: 原型没有变化
console.log(Object.getPrototypeOf(str) === 
   Object.getPrototypeOf(str2)); // true
console.log(str.t); // 100
console.log(str2.t); // 100

// 测试2: Object()没有受到影响
console.log((new Object).t); // undefined

// 测试3：重置
recovery();
console.log(str.t);  // undefined
console.log(str2.t);  // undefined
