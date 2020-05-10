/******************************
 * 文件 MyObjectProxy.mjs
*******************************/
import MyObject from './MyObject.mjs'

var logger = {
  // 更多handler方法

  get: function(target, key) {
    console.log('[INFO] - ' + target._id, 'access key name:', key);
    return target[key];
  }
}

var uuid = 0;
export default new Proxy(MyObject, {
  construct: function(...args) {
    var newInstance = Reflect.construct(...args);
    return new Proxy(Object.assign(newInstance, {_id: ++uuid}), logger);
  }
});

