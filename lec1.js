function sayName(name)
{
    return 'Hello ' + name;
}
var hello = sayName;
var fun = sayName('Alamin');
console.log(hello);
console.log(fun);
console.log(hello('Azad'));
var anotherhello = hello;
console.log(anotherhello('Roki'));
var arr = [1,2,3];
arr.push(sayName);
// console.log(arr);
var person ={
    name:'Alamin',
    sayName:hello,
    print:function()
    {
        console.log('Hi');
    }
}
console.log(person);
var sum = 10 + function(){return 50}();
console.log(sum);
function wow(name,fun)
{
    return fun(name);
}
var result = wow('Alamin',sayName);
console.log(result);

function base(b)
{
    return function(n)
    {
        var result = 1;
        for(var i=0;i<b;i++)
        {
            result *=n;
        }
        return result;
    }
}
// var power = base(2);
// var result = power(5);
var result = base(2)(3);
console.log(result);