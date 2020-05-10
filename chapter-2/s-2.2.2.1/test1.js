var x = 100;
let y = 200;

console.log(Object.getOwnPropertyDescriptor(global, 'x').value); // 100
console.log(Object.getOwnPropertyDescriptor(global, 'y')); // undefined
