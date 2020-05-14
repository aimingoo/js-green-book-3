// 续上例
var arr = new Array(1000*10000);   // 1000万个元素

var proxy = new Proxy(arr, {
  ownKeys() {
    console.log('TRY -> ownKeys()');
    return Reflect.ownKeys(...arguments);
  },
  get(_, key) {
    console.log('GET -> ', key);
    return Reflect.get(...arguments);
  }
})