function MyObject(x) {
  if (x <= 1) {
    this.x = this.x || x;
  }
  else {
    this.x = (this.x || 1) * x;
  }
  return x>1 ? MyObject.call(this, x-1) : this;
}

// 测试
let {x} = new MyObject(10);
console.log(x);