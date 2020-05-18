// 例2：使用Then链来处理有时序依赖的数据
var p1 = Promise.resolve(1);

var expand_v2 = x => { 
  return (x < 9) ? '0' + x : x.toString();
};

// pass <v1> as <x>
p1.then(expand_v2)
  .then(v2 => {  // get <v2> from p2, and
    return 'v3: ' + v2;  // resolve value for p3
  });

