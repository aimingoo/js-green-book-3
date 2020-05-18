# 绿皮书第三版

所有在《JavaScript语言精髓与编程实践》一书的第三版中的代码的测试用例。

Issues区可以提交问题并发布勘误。



# Versions

已测试过的版本包括：

* Node.js v8.x + Mocha v5.2.0^+^
* Node.js v10.x~12.x + Mocha v6.0.0^+^



NOTE1：第7章讲述的部分内容需要在Node v10.12之后版本才被支持，因此测试这一部分代码可能需要安装高版本Node.js。

NOTE2：在Node.js v6.x以及以下版本中，需要安装Mocha和fancy-test的不同版本，因此请留意版本的匹配情况。

NOTE3：在Mocha版本不支持的情况下，可以用Node.js直接运行目录中的`*.js`文件。部分情况下，你可能需要运行目录中的`run.sh`，这是简单的bash脚本，在Windows环境下可以参考该文件来运行批处理或命令。



# Usage

```bash
> git clone https://github.com/aimingoo/js-green-book-3
> cd js-green-book-3
> bash init.sh

# run test
> cd chapter-2
> bash ../run.sh

# (OR, 可以使用tap参数来得到简洁风格的报告)
> cd ..
> bash run.sh tap

# (OR, 对于某些测试需要使用自己的run.sh)
> cd chapter-1/s-1.1.2
> bash run.sh

# (OR，可以在几乎所有的章节中使用mocha)
> cd chapter-3/s-3.1.1.1
> mocha
```

# History

* 2020.05.18 Chapter 5~7 final.
* 2020.05.10 Initial release, include chapter 1~4.
