function foo() {
  'use strict';
  console.log("this: ", this && typeof this);
  console.log("args: ", ...arguments);
}