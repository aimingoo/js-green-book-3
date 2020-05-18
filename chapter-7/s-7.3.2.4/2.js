var thenableObj2 = {
  then: function(resolve) {
    resolve("result in thenableObj2");
  }
}

var x = {
  then: function(resolve) {
    resolve(thenableObj2);  // return thenable again
  }
}

// 这里得到的值是Promise.resolve(thenableObj2)的结果，而非直接是该对象
// (resolve thenable again, in javascript engine)
Promise.resolve(x).then(value => {
  console.log(value);  // value is "result in thenableObj2"
});

