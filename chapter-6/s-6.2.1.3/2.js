// 示例2：通过方法调用来获取被包装后的对象

var x = 100;
Object.prototype.getSelf = function() {
  return this;
}

// 包装行为发生在这个存取运算过程中
var me = x.getSelf();
// 包装后的对象
console.log(typeof me, me);  // 'object' [Number: 100]