function MyFunc() {
  // 初值
  var value = 100;

  // 内部的函数, 用于该问value
  function setValue(v) {
    value = v;
  }
  function getValue() {
    return value;
  }

  // 将内部函数公布到全局
  return [setValue, getValue];
}
