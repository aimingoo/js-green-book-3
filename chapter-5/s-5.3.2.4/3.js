var obj3 = {
  callMe() {
    console.log(typeof callMe);
  },

  *callMe2() {
    console.log(typeof callMe2);
  }
}

// 测试
obj3.callMe(); // undefined
obj3.callMe2().next(); // undefined
