function Arguments(...args) {
  // or direct return arguments;
  return Object.setPrototypeOf(args, Arguments.prototype);
}
Arguments.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

// 测试
let args = new Arguments(1, 1, 2, 4);
console.log(args.length); // 4
console.log(args[2]); // 2
