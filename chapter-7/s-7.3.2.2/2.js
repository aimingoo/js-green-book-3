function sleep(tag, n, value) {
  console.log(tag);
  return new Promise(resolve => setTimeout(()=>resolve(value), n));
}

// 在语义上，resolve(x)意味着p代理了对象x 
data = new Object;
x = sleep('10s', 10*1000, data);
p = Promise.resolve(x);

// 然而x是一个promise对象，因此p所代理的实际上是数据data，而不是对象x
(async function() {
  console.log(await p === data);
})();