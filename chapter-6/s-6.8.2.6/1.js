/**
 * 绑定引擎识别的值，与引擎/宿主交换数据
**/

// prepack实现的"语言类型（Language types）"
var Types = require(`${lib}/values`);

// 在引擎中创建"语言类型（Language types）"的数据
var { NumberValue } = require(`${lib}/values`);
var EngineData = {x: new NumberValue(realm, 100), y: new NumberValue(realm, 200)};

/* 如下可以对照参考: `s-6.8.2.5/2.js` */

// 在环境中创建标识符x和y（相当于let声明）
// （参见ES7, 8.1.1.4.2 CreateMutableBinding ( N, D )）
realm.$GlobalEnv.environmentRecord.CreateMutableBinding('x', false);
realm.$GlobalEnv.environmentRecord.CreateMutableBinding('y', false)

// 在环境中为x和y绑定值
// （参见ES7, 8.1.1.4.4 InitializeBinding ( N, V )）
realm.$GlobalEnv.environmentRecord.InitializeBinding('x', EngineData.x);
realm.$GlobalEnv.environmentRecord.InitializeBinding('y', EngineData.y);