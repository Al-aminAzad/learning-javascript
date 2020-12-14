// function outer()
// {
//     function inner()
//     {
//         console.log('I am inner function');
//     }
//     inner();
//     console.log('I am outer function');
// }
// outer();
function add(a,b)
{
    function sum()
    {
        return a+b;
    }
    function sub()
    {
        return a-b;
    }
    function times()
    {
        return a*b;
    }
    function div()
    {
        return a/b;
    }
    return sum()+sub()+times()+div();
}
var result = add(10,5);
console.log(result);
console.log('Check for github');