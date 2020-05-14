// 示例3
var obj = new Object();
var events = {m1: "clicked", m2: "changed"}; 

for (e in events) {
   obj[e] = function(){
      console.log(events[e]);
   };
}
// 显示false, 表明是不同的函数实例
console.log( obj.m1 === obj.m2 );

// 方法m1()与m2()输出相同的值
// 其原因在于两个方法都访问全局闭包中的同一个upvalue值e
obj.m1();
obj.m2();