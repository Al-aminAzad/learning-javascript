var arr = [5,2,10,7,3,1,9];
// arr.forEach(function(element,index){
//     console.log('index= ' + index + ' '+ 'value=' + element);
// });

function loop(arr,callback)
{
    for(var i=0;i<arr.length;i++)
    {
        callback(arr[i],i);
    }
}
loop(arr,function(element,index)
{
    console.log('index= ' + index + ' '+ 'value=' + element);
});