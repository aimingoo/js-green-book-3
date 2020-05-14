/**
 * 示例2: 消灭条件分支语句
 */ 

// 1. 无else分支
if (tag > 1) {
  console.log('true');
}

// 转换成
(tag > 1) ? console.log('true') : null;

// 2. 有else分支
if (tag > 1) {
  console.log('true');
}
else {
  console.log('false');
}

// 转换成
(tag > 1) ? console.log('true') : console.log('false');
