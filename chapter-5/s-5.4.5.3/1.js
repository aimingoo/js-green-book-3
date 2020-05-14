// 取数组和原始的迭代方法
var arr = [1,2,3];
var iteratorMethod = arr[Symbol.iterator];

// 观察方法
var monitor = {
  ["return"](value) { 
    console.log(" >> RETURN", this && this.name || '');
    return {value, done: true};
  },

  ["throw"](err) {
    console.log(" >> THROW", this && this.name || '');
    return {value: err, done: true};
  }
}

// 在目标数组的迭代器上添加观察方法
var target = [3,4,5];
target[Symbol.iterator] = function() {
  var tor2 = iteratorMethod.call(this);
  return Object.assign(tor2, monitor, {name:"target"});
}

function *aGenerator() {
  yield 1;
  yield 2;
  yield* target;
  yield 6;
}

// 测试1：列举值
var tor = aGenerator();
for (let i of tor) {
  console.log(i);
}

// 重新获得一个生成器对象
tor = aGenerator();

// 测试2：在激活委托的target后制造一个tor.throw()
// >> THROW target
for (let i of tor) if (i==3) tor.throw();

// 重新获得一个生成器对象
tor = aGenerator();

// 测试3：在激活委托的target后中止迭代
// >> RETURN target
for (let i of tor) if (i==3) break;