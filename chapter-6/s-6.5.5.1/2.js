global.this = 'hello';
console.log(this === global);  // 全局环境中this是global
console.log(this.this); // 'hello'
