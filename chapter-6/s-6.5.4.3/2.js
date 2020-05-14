var x = 100, y = 200, tries = 0;

// 在with语句的作用域中执行代码
// （不在with语句后使用大扩号，以避免使用块语句的作用域）
with ({x, y}) for (key in valueOf()) {
  if (tries++ == 0) { // first, add new property
    valueOf().z = 300;
    console.log("SHOW : ", 'z', z); // yes, exist 'z'
  }
  console.log("FORIN: ", key, eval(key));  // eval in with-scope
}

// （续上例）

// 参见上例
with ([x, y]) for (value of valueOf()) {
  if (length == 2) {
    push(300);
    console.log("ARRAY: ", length, " elements, values: ", ...valueOf());
  }
  console.log("FOROF: ", value);
}