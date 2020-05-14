// （续之前“6.8.2.3　对用户代码的语法分析”小节之"步骤4：得到可执行的AST节点"）
// ...

// 得到指定节点
var constructor = ast.program.body[0].body.body[0];

// 将当前上下文中的环境置换成类的声明环境
realm.getRunningContext().lexicalEnvironment = classScope;

// 在classScope这个词法环境中，将constructor指向的ast节点作为方法创建
let constructorInfo = Functions.DefineMethod(realm, constructor// , ...
	/* proto, env, strictCode, constructorParent */);

// （后续逻辑，略）
// ...