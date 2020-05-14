// 方法5：直接声明方法，以及递归调用
var obj = {
  fact(...args) {
    const fact = x => x && x*fact(x-1) || this.power || 1;
    return fact(...args);
  }
}

// 参见“方法4”
obj.power = 100
console.log(obj.fact(9));