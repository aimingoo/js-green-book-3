// 步骤1：创建上下文并关联到（可执行的）环境

// 载入prepack的上下文组件
var { ExecutionContext } = require(`${lib}/realm.js`);

// 在当前域（realm）中创建上下文
var context = new ExecutionContext();
context.realm = realm;

// 关联到全局环境（假设用户代码将运行在全局）
context.lexicalEnvironment = context.variableEnvironment = realm.$GlobalEnv;

// 步骤2：向执行引擎推入上下文
realm.pushContext(context);