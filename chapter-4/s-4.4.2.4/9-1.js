// 示例9：如果for语句中使用var x声明的话，x的值将总是3
for (let x of [1,2,3]) {
  setTimeout(()=> {
     console.log(x); 
  }, 1000);
}