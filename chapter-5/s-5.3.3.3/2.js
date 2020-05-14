// 在语义上，GeneratorFunction()是Fucntion的子类。类似如下声明：
//  - class GeneratorFunction extends Function { ... }
GeneratorFunction = (function*() {}).constructor;

// 在语义上，AsyncFunction()是Fucntion的子类。类似如下声明：
//  - class AsyncFunction extends Function { ... }
AsyncFunction = (async x=>x).constructor;

// 在语义上，AsyncGeneratorFunction()是Fucntion的子类。类似如下声明：
//  - class AsyncGeneratorFunction extends Function { ... }
AsyncGeneratorFunction = (async function* () {}).constructor;