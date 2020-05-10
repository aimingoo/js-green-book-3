var o1 = {};
var o2 = {};
var str = '123';
var num = 1;
var b0 = false;
var b1 = true;
var ref = new String();

// 示例1: 值类型的比较, 考察布尔值与数值在序列中的大小
console.log(b1 < num); 	// 显示false
console.log(b1 <= num);	// 显示true, 表明b1==num
console.log(b1 > b0); // 显示true

// 示例2: 值类型与引用类型的比较
// ( 空字符串被转换为0值 )
console.log(num > ref); // 显示true

// 示例3: 两个对象（引用类型）比较时总是返回false
console.log(o1 > o2 || o1 < o2 || o1 == o2);

