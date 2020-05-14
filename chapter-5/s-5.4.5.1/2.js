var obj = {
  [Symbol.iterator]: function*() {
     for (var i=0; i<10; i++) yield i;
  }
}

// 多次迭代
console.log(...obj);  // 0 1 2 3 4 5 6 7 8 9
console.log(...obj); // 0 1 2 3 4 5 6 7 8 9
