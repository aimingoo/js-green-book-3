// （又：上例的另一种写法）
var pendings = [1, 2, 3].map(x => Promise.resolve(x));
Promise.all(pendings)
  .then(values => {
    let [v1, v2, v3] = values;
    // ..
  });
