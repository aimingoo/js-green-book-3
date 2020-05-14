/**
 * 示例1: 消灭条件分支语句(无else分支)
 */ 
if (tag > 1) {
  console.log('true');
}

// 转换成
(tag > 1) && console.log('true');
