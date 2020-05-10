// （使用var声明）
for (var x of [1,2,3]) {
  setTimeout(()=> {
     console.log(x); 
  }, 1000);
}