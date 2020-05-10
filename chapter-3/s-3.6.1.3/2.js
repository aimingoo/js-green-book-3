var obj = new Object;

// 这里对obj又做了一次代理，以便能展示[[set]]对target的影响
var target = new Proxy(obj, {
  getOwnPropertyDescriptor: function(target, key) {
    console.log(' [[GetOwnProperty]] on target >>',  ...arguments);
    return Reflect.getOwnPropertyDescriptor(...arguments)
  }
})

var proxy = new Proxy(target, {
  getOwnPropertyDescriptor: function(target, key) {
    console.log(' [[GetOwnProperty]] on proxy >>',  ...arguments);
    return Reflect.getOwnPropertyDescriptor(...arguments);
  },
  defineProperty: function(target, key, desc, receiver) {
    console.log(' [[DefineOwnProperty]] on proxy >>',  ...arguments);
    return Reflect.defineProperty(...arguments);
  }
})