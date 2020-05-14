// （示例1）

var excel = {
  get Exit() {
    process.exit(0);  // in Node.js
  }
}

excel.Exit; // process exit