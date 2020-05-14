// 方法4：用属性来替代方法，并在递归中维护this引用
var obj = {
  get fact() {
    const fact = x => x && x*fact(x-1) || this.power || 1;
    return fact;
  }
}

// 当x递减到0时，power用于设定将值放大的倍率（默认为1）
obj.power = 100

// 参见“方法3”中的fact()函数
console.log(obj.fact(9));
