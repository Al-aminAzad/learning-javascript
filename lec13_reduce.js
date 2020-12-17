var arr = [2, 4, 5, 9, 8, 7, 12, 11];
// var sum=0;
// for(var i=0;i<arr.length;i++)
// {
//     sum+=arr[i];
// }
// console.log(sum);

// var result = arr.reduce(function(sum,item){
//     return sum+item;
// },0);
// console.log(result);
const result = arr.reduce((sum,item) => sum+=item,0)
console.log(result);