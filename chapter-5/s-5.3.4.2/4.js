function MyObject(x) {
  const fact = x => x && x*fact(x-1) || 1;
  this.x = fact(x);
}

// 测试
let {x} = new MyObject(10);
console.log(x);