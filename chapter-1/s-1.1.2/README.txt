本示例简单模拟了浏览器环境，以用于运行`test.js`.

本例不能直接使用Node.js装载文件运行，因为node环境中的.js文件是运行在模块中，不是真实的全局环境。

本例可在linux环境中使用如下命令行运行：

```
> node -e "$(cat test.js)"

# (OR)
> node -e "`cat test.js`"
```
