// 取数组和原始的迭代方法
var arr = [1,2,3];
var iteratorMethod = arr[Symbol.iterator];

// 观察方法
var monitor = {
  ["return"](value) { 
    console.log(" >> RETURN", this && this.name || '');
    return {value, done: true};
  }
}

// 重写迭代方法
arr[Symbol.iterator] = function() {
  var tor = iteratorMethod.call(this);
  return Object.assign(tor, monitor);
}

// 测试
for (let i of arr) {
  if (i == 2) break;
  console.log(" >>", i);
}