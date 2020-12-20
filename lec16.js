function Pp(a,b)
{
    this.a=a;
    this.b=b;
}
function Obj2(a,b,c)
{
    Pp.call(this,a,b);
    this.c=c;
}
Obj2.prototype=Object.create(Pp.prototype);
var obj1=new Pp(1,2);
var obj2=new Obj2(3,4,5);