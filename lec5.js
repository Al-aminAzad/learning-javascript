var arr = [1, 2, 5, 4, 8, 9, 12];
function cbf(arr) {
  console.log(arr);
}
arr.forEach(cbf);

function caller() {
  return function (name) {
    return "Caller is calling you " + name;
  };
}
// var a= caller();
// var b= a('Alamin');
// console.log(b);
var x = caller()("Alamin");
console.log(x);
