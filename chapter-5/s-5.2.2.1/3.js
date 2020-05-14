/**
 * 示例3: 多重分支语句与if语句连用的等效性
 */ 
switch (value) {
  case 100:
  case 200: console.log('value is 200 or 100'); break;
  case 300: console.log('value is 300'); break;
  default: console.log('I don\'t know.');
}

// 等效于
if (value == 100 || value == 200) {
  console.log('value is 200 or 100');
}
else if (value == 300) {
  console.log('value is 300');
}
else {
  console.log('I don\'t know.')
}
