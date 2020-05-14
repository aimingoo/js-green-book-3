var obj = {
  start: 3,
  [Symbol.iterator]: function*(start=5, end=10) { 
     var {start, end} = {start, end, ...this};
     for (var i=start; i<end; i++) yield i;
  }
}

// 使用obj的属性替代/模拟参数传入
console.log(...obj);  // 3 4 5 6 7 8 9
obj.end = 6;
console.log(...obj);  // 3 4 5

// 使用默认值
delete obj.end
delete obj.start
console.log(...obj);  // 5 6 7 8 9
