let versions = process.versions
  ? new Map(Object.entries(process.versions)
  	  .map(([key, value]) => [key, parseFloat(value)]))
  : new Map(); // empty

let fs = require('fs');
let { setTimeout } = Function('return this')();

module.exports = {
  get resolved() {
    return ((/(\\|\/)(s-[0-9.]{1,})\1/).exec((module.parent || "").filename) || [])[2];
  },

  versions(app, expr='') {
  	return eval(`${versions.get(app)} ${expr}`);
  },

  promised(require) {
    return (filename, variants, evaluate=eval) => { // a evaluate or indirect-eval
      let executeContext = fs.readFileSync(require.resolve(filename)).toString();
      if (variants !== undefined) {
        if (Array.isArray(variants))
          return evaluate(`${executeContext}\n;;;;\nPromise.all([${variants.join(',')}]);`);
        else
          return evaluate(`${executeContext}\n;;;;\nPromise.resolve(${variants});`);
      }
      else
        return Promise.resolve(evaluate(executeContext));
    }
  },

  timeouted(delayQueue) {
    return (f, ms, ...args) => { // hijack setTimeout
      delayQueue.push(new Promise((ok, err) => {
        setTimeout(() => {
          try { ok(f(...args)) } catch(e) { err(e) }; // hijack
        }, ms);
      }));
    };
  }
}
