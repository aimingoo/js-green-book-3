var s1 = 'abc';
var s2 = 'ab';
var s3 = '101';

var b = true;
var i = 100;

// 示例1: 两个操作数为字符串，将比较每个字符的序列值. 所以显示为true.
console.log( s1 > s2 );

// 示例2: 在将字符串s3转换为数值时得到101. 所以显示为true.
console.log( s3 > i );

// 示例3: 在将字符串s1转换为数值时得到NaN，所以下面的三个比较都为false.
// (注: 变量b中的布尔值true, 转换为数值1参与运算)
console.log( s1 > b || s1 < b || s1 == b );

// 示例4: 两个NaN的比较. NaN不等值也不大于或小于自身，所以下面的三个比较都为false.
console.log( s1 > NaN || s1 < NaN || s1 == NaN );

