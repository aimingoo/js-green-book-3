// 示例6
var obj = new Object();
var events = {m1: "clicked", m2: "changed"}; 

for (e in events) {
  (obj[e] = function() {
     // arguments.callee指向匿名函数自身
     console.log(events[arguments.callee.aValue]);
   }
  ).aValue = e; 
}

// 下面将输出不同的值
obj.m1();
obj.m2();