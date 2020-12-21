var a=15;
A();
function A()
{
    var b=20;
    B();
    function B()
    {
        var c=20;
        C(b,c);
    }

}
function C(b,c)
{
    var d=25;
    console.log(a+b+c+d);
}