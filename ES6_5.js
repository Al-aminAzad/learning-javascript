// let add = (a,b) =>a+b;
// console.log(add(10,20));

// let sqr = (a=1,b=1) =>a*b;
// console.log(sqr(10,5));

// function defaultpar(name,age){
//     name?name=name:name='Alamin';
//     age?age=age:age=18;
//     console.log('Hello '+name+'. I am '+age+' years old');
// }
// console.log(defaultpar('Jayeema',17));

// let defaultpar6 = (name6='Tanvir',age6=18) =>{
//     console.log(`I\'m ${name6} and ${age6} years old`);
// }
// console.log(defaultpar6('Asif',12));

// function FunctionConst(name,age){
//     name?name=name:name='Alamin';
//     age?age=age:age=25;
//     this.name=name;
//     this.age=age;
// }
// var jayeema = new FunctionConst();
// console.log(jayeema.name);
// console.log(jayeema.age);
// var jayeema = new FunctionConst('Jayeema',19);
// console.log(jayeema.name);
// console.log(jayeema.age);

function FunctionConst6(name='alamin',age=19){
    this.name=name;
    this.age=age;
}
let jayeema=new FunctionConst6();
console.log(jayeema.name);
console.log(jayeema.age);