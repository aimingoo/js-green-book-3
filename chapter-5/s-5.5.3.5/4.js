// 由于for...in/of语句被设计为每次迭代是新的实例化环境，所以key可以声明为常量
for (const key in global) {
  console.log(key);
}