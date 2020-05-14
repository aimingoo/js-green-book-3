var obj2 = {
  // 声明属性存取器方法（也可以用set关键字）
  get name() {
    return 'property getter'
  },

  // 声明异步方法
  async callMe() {},

  // 声明生成器方法，用*作为方法名前缀即可
  *maker() {}
}

// 唯一的例外：生成器方法会有prototype属性
console.log('prototype' in obj2.maker); // true