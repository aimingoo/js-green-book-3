# 绿皮书第三版

所有在《JavaScript语言精髓与编程实践》一书的第三版中的代码的测试用例。

Issues区可以提交问题并发布勘误。


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

* 2020.05.20 Initial release.
