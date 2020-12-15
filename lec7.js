function host()
{
    console.log('I am host function');
    return function()
    {
        console.log('I am chiled');
    }
}
var a=host();
console.log(a());

function greetings(msg)
{
    return function(name)
    {
        console.log(msg + ' '+name);
    }
}
// function greetings(msg)
// {
//     function another(name)
//     {
//         console.log(msg + ' '+name);
//     }
//     return another;
// }
var message = greetings('Good morning');
var person =message('Al-amin');