// 用户代码通过resolve（或reject）来回调引擎以置值
p = new Promise(function(resolve, reject) {
  resolve(100); 
});