// 方法3：使用const声明
const fact = x => x && x*fact(x-1) || 1;
console.log(fact(9)); // 362880

