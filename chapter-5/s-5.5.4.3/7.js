// 示例6
var obj = new Object();
var events = {m1: "clicked", m2: "changed"}; 

for (e in events) {
  (obj[e] = function f() {
     console.log(events[f.aValue]);
   }
  ).aValue = e; 
}
// 下面将输出不同的值
obj.m1();
obj.m2();