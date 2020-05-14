// （示例2）

// 将普通函数用作回调函数
function callback(x) {
   console.log("Hi, ", this.name);
   console.log("X: ", x);
}

// （或，）使用箭头函数和上下文中的数据
var thisObj2 = {
  get callback() {
    let x = 200; // 上下文中的数据
    return ()=> {
       console.log("hi, ", this.name); // 箭头函数使用上下文中的this
       console.log("X: ", x);
    }
  }
}