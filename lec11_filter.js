var arr = [2,4,5,9,8,7,12,11];
// var newarr=[];
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]%2)
//     {
//         newarr.push(arr[i]);
//     }
// }

// var newarr =arr.filter(function(element){
//     return element%2==0;
// });
// console.log('New array is ' + newarr);

function myFilter(arr,callback)
{
    var newArr=[];
    for(var i=0;i<arr.length;i++)
    {
        if(callback(arr[i]))
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var myarr = myFilter(arr,function(element){
    return element%2==1;
});
console.log('New array is ' + myarr);