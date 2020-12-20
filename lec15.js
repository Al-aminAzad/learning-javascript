// function Person()
// {
//     this.name='Alamin';
// }
// function Teacher()
// {
//     Person.call(this);
//     this.subject='Functional javascript';
// }
// var teacher = new Teacher();
// var name = teacher.name;
// console.log(name);

// function Person(name)
// {
//     this.name=name;
// }
// Person.prototype.printName = function()
// {
//     console.log('Name: ' + this.name);
// }
// Person.prototype.another = function()
// {
//     console.log('Hello this anothe function');
// }
// function Student(name,id)
// {
//     Person.call(this,name);
//     this.id = id;
// }
// Student.prototype = Object.create(Person.prototype);
// Object.setPrototypeOf(Student.prototype,Person.prototype);
// Student.prototype.constructor = Student;
// var student = new Student('Alamiin',2015);
// Person.prototype.printName = function()
// {
//     console.log(this.name + 'not copied');
// }
// Person.prototype.skill='Javascript';
// console.log(student);


function Person(name,age,job)
{
    this.name = name;
    this.age = age;
    this.job= job;
}

function Teacher(name,age,job,subject)
{
   Person.call(this,name,age,job);
    this.subject = subject;
}
// Person.prototype.dateofbirth=function()
// {
//     console.log(this.name + ' born in ' + (2020-this.age));
// }
// Person.prototype.address='Bangladesh';
// var alamin = new Person('Alamin',25,'jobless');
// console.log(alamin.dateofbirth());
// console.log(alamin.address);
var ashrafulSir = new Teacher('Ashraful',30,'Teacher','CSE');
console.log(ashrafulSir);