obj = new Object;

// 重新置值时, 关联关系被清除
obj.method = new Function();

// 删除成员时, 关联关系也被清除
delete obj.method;

// 变量销毁(或重新置值)导致的关联关系清除
obj = null;

