// 示例：使用for await...of处理一般生成器对象或迭代器

// 1. 处理一般生成器对象或迭代器（例如有Symbol.iterator属性的数组）
var promises = [Promise.resolve(10), Promise.resolve(20)];
for await (let x of promises) {
  console.log(x);
}

// （效果同上）
// 2. for await...of语句会将每个迭代值转换为promise对象来处理
var values = [10, 20];
for await (let x of values) {
  console.log(x);
}