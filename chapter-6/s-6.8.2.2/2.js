let lib = `../s-6.8.2/prepack-core/lib`;

// 步骤0的替代过程
var initializeEngine = require(`${lib}/initialize-singletons.js`).default;
initializeEngine();

// Prepack实现的"域(Realm)"
// （参见ES7, 8.2 Realms）
var { Realm } = require(`${lib}/realm.js`);

// 默认配置
var opts = {serialize: true};

// 步骤1：创建域
var realm = new Realm(opts); // default options

// prepack实现的"内在值(Intrinsic values)"
// （参见ES7, 6.1.7.4 Well-Known Intrinsic Objects）
var intrinsics = realm.intrinsics;

// prepack提供的工具函数
var initializeIntrinsics = require(`${lib}/intrinsics`).initialize;

// 步骤2：初始化realm
initializeIntrinsics(intrinsics, realm);

// prepack实现的、在用户代码层面可以理解的"对象（Object）"
// （参见ES7, 8.2.3 SetRealmGlobalObject）

// 类ObjectValue()是prepack声明的类型，它的实例就是JavaScript中普通的object
var ObjectValue = require(`${lib}/values`).ObjectValue;

// 步骤3：创建全局对象，相当于 global = new Object(...)
realm.$GlobalObject = new ObjectValue(realm, intrinsics.ObjectPrototype, "global");

// prepack实现的ECMAScript规范的全局对象初始化工具函数
// （参见ES7, 8.2.4 SetDefaultGlobalBindings）
var initializeGlobal = require(`${lib}/intrinsics/ecma262/global.js`).default;

// 步骤4：初始化全局对象
//（该工具函数将读取realm.[[GlobalObject]]作为global对象初始化）
initializeGlobal(realm);

// prepack实现的ECMAScript规范的"环境（Environment）"
// （参见ES7, 8.1 Lexical Environments）
var { EnvironmentImplementation } = require(`${lib}/methods/environment.js`);
var Environment = new EnvironmentImplementation();

// 步骤5：创建全局环境
// （参见ES7, 8.2.4 SetRealmGlobalObject）
realm.$GlobalEnv = Environment.NewGlobalEnvironment(realm, realm.$GlobalObject, realm.$GlobalObject);

// Recheck
if (!(realm.$GlobalEnv && (typeof realm.$GlobalEnv.execute === 'function'))) {
  throw new Error("The prepack environment initialization fail.")
}