// s作为一个元素
let s = Object('abc');
console.log([].concat(s).length); // 1

// 使s支持连结展开
s[Symbol.isConcatSpreadable] = true;
console.log([].concat(s).length); // 3

// s是支持展开运算的(SpreadableOprator)
console.log([...s].length); // 3

// 使s不再支持展开运算
s[Symbol.iterator] = undefined;
try {
  console.log([...s].length); // TypeError: s is not iterable
}
catch(e) {
  console.log(e.message);
}