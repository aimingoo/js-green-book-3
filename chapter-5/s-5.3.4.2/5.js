function MyObject(x) {
  if (x <= 1) {
    this.x = x;
  }
  else {
    const fact = x => this.x = x && x*fact(x-1) || 1;
    fact(x); // recursion assign this.x
  }
}

// 测试
let {x} = new MyObject(10);
console.log(x);