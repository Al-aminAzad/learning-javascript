function Person(name,email)
{
    this.name = name;
    this.email= email;
    this.print = function()
    {
        console.log('Name= '+this.name);
    }
}
var obj = new Person('Alamin','alaminazad240@gamil.com');
var obj2 = new Person('jayeema','mjayeema@gmail.com');
var obj3  = new Person('Tanvir ahmmed','tanvir@gmail.com')
var people =[obj,obj2,obj3];
people.forEach(function(a){
    a.print();
    console.log('Email: ' + a.email);
});
console.log(obj.name);
console.log(obj.email);
console.log(obj);
for(var property in obj)
{
    console.log(property);
}
function Book(name,author,price)
{
    this.name=name;
    this.author = author;
    this.price= price;
}
var b = new Book('Functional javascript','Micbeal Fogus',250);
console.log(b.constructor);