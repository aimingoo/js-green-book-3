// 在环境中创建标识符x和y（相当于let声明）
// （参见ES7, 8.1.1.4.2 CreateMutableBinding ( N, D )）
realm.$GlobalEnv.environmentRecord.CreateMutableBinding('x', false);
realm.$GlobalEnv.environmentRecord.CreateMutableBinding('y', false)

// 在环境中为x和y绑定值
// （参见ES7, 8.1.1.4.4 InitializeBinding ( N, V )）
realm.$GlobalEnv.environmentRecord.InitializeBinding('x', 100);
realm.$GlobalEnv.environmentRecord.InitializeBinding('y', 200);