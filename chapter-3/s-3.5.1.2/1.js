obj = Object.create(null, {
  aData: { // 一个存取属性
    get() { return this.aMethod() }
  },
  aMethod: { // 一个数据属性
    value: function() { return this.aData }
  }
});
