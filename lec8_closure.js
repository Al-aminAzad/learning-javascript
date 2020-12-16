var name = "Al-amin";
function sayName()
{
    console.log('Hello brother ' + name);
}
// console.dir(sayName);
sayName();
function greetings(msg)
{
    function another(name)
    {
        console.log(msg + ' '+name);
    }
    return another;
}
var message = greetings('Good morning');
var person =message('Al-amin');