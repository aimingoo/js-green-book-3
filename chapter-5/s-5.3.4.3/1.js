var aSet = new Set();
for (var i = 0; i < 10; i++) {
  aSet.add(function foo() {});
}

// 集合元素是唯一的，因此如下输出表明有10个不同的函数
console.log(aSet.size); // 10