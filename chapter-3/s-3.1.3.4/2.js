function MyObject() {
  this.name = "instance's name";
}
MyObject.prototype.name = "prototype's name";

// 创建后，在构造器中name成员被置为值"instance's name"
var obj = new MyObject();
console.log( obj.name );

// 删除该成员 
delete obj.name;
// 显示true, 成员名仍然存在
console.log( 'name' in obj );
// 并且被恢复到原型的值"prototype's name"
console.log( obj.name );
