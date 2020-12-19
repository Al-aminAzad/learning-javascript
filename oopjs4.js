function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Person.prototype.hello = function () {
//   console.log("Hello " + this.name);
// };
// Person.prototype.email='alaminazad240@gmail.com';
// Person.prototype.print= function()
// {
//     console.log(this.name,this.age);
// }
Person.prototype ={
    hello:function()
    {
        console.log('Hello '+this.name);
    },
    print:function()
    {
        console.log(this.name,this.age);
    },
    email:'alaminazad240@gmail.com'
};
var o1 = new Person("Alamin", 25);
var o2 = new Person("Jayeema", 24);
console.log(o1);
console.log(o2);
// console.log(Person.prototype);
