var obj = {
  'abcd.def': 1234,
  '1': 4567,
  '.': 7890,
  more: {
   a: 100,
   b: 200
  }
}

var {'abcd.def': x, '.': y,  more: {a: z}} = obj;
console.log(x);  // 1234
console.log(y);  // 7890
console.log(z);  // 100

// (续上例)
var func = ({'abcd.def': x, '.': y}) => x+y;
console.log(func(obj)); // 9124

// (续上例)
var nameLeft = 'abcd', nameRight = 'def';

// 在“[]”运算符中使用表达式计算的值作为成员名
console.log(obj[nameLeft + '.' + nameRight]);  // 1234
console.log(obj[[nameLeft, nameRight].join('.')]);  // 1234

// 也可以在赋值模板中使用
var func2 = ({[nameLeft + '.def']: x}) => x*100;
console.log(func2(obj));  // 123400
