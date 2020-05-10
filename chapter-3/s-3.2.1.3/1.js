// 简单版本的asConstructor()
function asConstructor(f) {
  return Object.assign(f, {
    prototype: {'constructor': f}
  })
}
aClass = asConstructor(new Function);
