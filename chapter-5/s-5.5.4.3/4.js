// 示例4
var obj = new Object();
var events = {m1: "clicked", m2: "changed"}; 

for (e in events) {
   obj[e] = function(aValue) {  // 闭包lv1
     return function() {  // 闭包lv2
       console.log(events[aValue]);
     }
   }(e);
}

/* 或用如下代码, 在闭包内通过局部变量保存数据
for (e in events) {
  function() {  // 闭包lv1
    var aValue = e;
    obj[e] = function() {  // 闭包lv2
      console.log(events[aValue]);
    } 
  }();
}
*/

// 下面将输出不同的值
obj.m1();
obj.m2();