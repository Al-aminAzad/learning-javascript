var arr = [2, 4, 5, 9, 8, 7, 12, 11];
// var maparr=[];
// for(var i=0;i<arr.length;i++)
// {
//     maparr.push(arr[i]+2);
// }
// console.log(maparr);

// var maparr = arr.map(function(item){
//     return item*2;
// });
// console.log(maparr);
// const maparr = arr.map(item => item*2); //ES6
// console.log(maparr);
function map(arr, callback) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    newarr.push(callback(arr[i]));
  }
  return newarr;
}
var maparr = map(arr, function (value) {
  return value * 10;
});
console.log(maparr);
