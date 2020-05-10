/**
 * 在for循环中使用break的简单示例
 * ( 使i=50,j=50不被处理 )
 */
for (var i=0; i<100; i++) {   for (var j=0; j<100; j++) {
    if (i==50 && j==50) break;
    // ...
  }
}

/**
 * 在switch中使用break的简单示例
 */
var chr = 'A';  // or 'B' and other...
switch (chr) {
  case null: break;
  case 'A':
  case 'B': break;
  default: 
    chr = 'X';
    break;
}
console.log(chr);

/**
 * 在default中使用break的简单示例
 */
chr = 'x'; // or '0', or other number
switch (chr) {
  default: 
    if (!isNaN(parseInt(chr))) break;  // chr is number?
    chr = chr.toUpperCase();
}
console.log(chr);