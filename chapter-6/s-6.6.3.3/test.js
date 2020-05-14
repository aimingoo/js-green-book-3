// test.js
eval(`
  "use strict";

  try {
    undefined = void 0; // rewrite fail in strict mode
  }
  catch (e) {
    console.log(e.message); // catch error and print message
  }

  function x() {
    "use strict";
    // ...
  }
  console.log("A function declaration:", typeof x);  // 'function'
`);