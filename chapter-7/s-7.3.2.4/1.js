var x = {
  result: 100,
  then: function(resolve) {
    resolve(this.result);  // return result as <value>
  }
}

// 测试
p2 = Promise.resolve(x);
p2.then(console.log);  // 101
