// 示例5
var obj = new Object();
var events = {m1: "clicked", m2: "changed"}; 

for (let e in events) { // 默认e是var声明
   obj[e] = function(){
      console.log(events[e]);
   };
}
// 显示false, 表明是不同的函数实例
console.log( obj.m1 === obj.m2 );

// 下面将输出不同的值
obj.m1();
obj.m2();