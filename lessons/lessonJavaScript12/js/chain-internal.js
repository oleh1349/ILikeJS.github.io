// var a = 1;
// var b = 2;
//
// var obj = {
//    a0: 10,
//    a1: 20,
//    foo: function () {
//      return (a + b) * (this.a0 + this.a1);
//    },
//    toString: function () {
//      console.log("\n" + "a = " + a, " b = " + b, " a0 = " + this.a0,  " a1 = " +
//      this.a1);
//    }
//
// };
//
//
// obj.toString();
// console.log("obj.foo() = " + obj.foo());
//
//
// a = 3;
// b = 4;
// obj.toString();
// console.log("obj.foo() = " + obj.foo());
//
//
//
// obj.a0 = -10;
// obj.a1 = -20;
// obj.toString();
// console.log("obj.foo() = " + obj.foo());

function setWrap() {
  var a = 1;
  console.log("setWarap.a = " + a);
  function setWrapNext(a) {
    var b = 2;
    return console.log("setWarapNext.b = " + b);
  }
  return setWrapNext();
}
setWrap();
