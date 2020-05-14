function MyObject(obj) {
  var foo = function() {
     // ...
  }

  if (!obj) return;

  // 属性obj.xxx 引用了函数foo
  obj.method = foo; 
}

// 示例1
MyObject();

// 示例2
MyObject(new Object());

// 示例3
var obj = new Object();
MyObject(obj);

