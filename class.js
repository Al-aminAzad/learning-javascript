// var Child = function(name,age){
//     this.name=name;
//     this.age=age;
// }
// var alamin = new Child('Alamin',25);
// console.log(alamin.name)
// console.log(alamin.age);
// Child.prototype.currentage= function(){
//     console.log('My name is '+this.name+' and '+this.age +' years old');
// }
// alamin.currentage();

// class Child6{
//     constructor(name6,age6){
//         this.name6=name6;
//         this.age6=age6;
//     }
//     currentage6(){
//         console.log(`My name is ${this.name6} and I\'m ${this.age6} years old.666`);
//     }
// }
// let alamin6=new Child6('Alamin azad',25);
// alamin6.currentage6();

class Persononly{
    constructor(name,age,job){
        this.name=name;
        this.age=age;
        this.job=job;
    }
    print(){
        console.log(`My name is ${this.name} and I\'m ${this.age} years old and my job is ${this.job}`);
    }
    static onlyme(){
        console.log(`This is private method`);
    }
}
class Teacher extends Persononly{
    constructor(name,age,job,subject){
        super(name,age,job);
        this.subject=subject;
    }
}
const oursir = new Teacher('Ashraful Sir',28,'Lecturer','CSE');
oursir.print();
Persononly.onlyme();