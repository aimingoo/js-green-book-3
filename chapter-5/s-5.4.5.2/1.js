function *myGenerator(fileName) {
  var fd = fs.fileOpenSync(fileName); // 打开本地文件

  try {
    var x = yield readline(fd);
    yield readline(fd);
    yield readline(fd);
  }
  finally {
    fs.fileCloseSync(fd);
  }

  return "Okay";
}