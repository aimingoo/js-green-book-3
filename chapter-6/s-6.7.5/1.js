// 待检测函数
function f() {
  var msg = (this === undefined) ? 'undefined'
    : (this === null) ? 'null'
    : '';
  console.log(msg || typeof this);
}

// 差异1：在aFunction.call()的第一个参数中传入undefined/null值
//  - 在严格模式中显示值：undefined/null 
//  - 在非严格模式中显示为（全局对象或顶层对象的类型值）：object
f.call(null);
f.call(undefined);

// 差异2：在aFunction.call()的第一个参数中传入值类型数据
//  - 在严格模式中显示typeof值：string、number等
//  - 在非严格模式中显示为object
f.call('abc');
f.call(2);
f.call(true);