// 创建一个可撤销的代理
var {proxy:func, revoke} = Proxy.revocable(new Function, {});

// 可以实施行为（包括创建实例、检查继承性等）
func();

// 撤销
revoke();

// 仍然是函数
console.log(typeof func); // "function"

// 无法实施行为
try {
  func();
}
catch(e) {
  // ERROR: Cannot perform 'apply' on a proxy that has been revoked
  console.log('ERROR:', e.message);
}