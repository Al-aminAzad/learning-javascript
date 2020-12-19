// var obj ={
//     name:'Alamin',
//     print: function()
//     {
//         console.log(this);
//     }
// }
// function mufun()
// {
//     function inner()
//     {
//         console.log(this);
//     }
//     new inner();
// }
// console.log(obj.print());

// var person = {
//   name: "Alamin",
//   print: function () {
//     console.log("Hello, " + this.name);
//   },
// };
//  console.log(person.print());
// var myPrint = function () {
//   console.log("Hello, " + this.name);
// };
// console.log(myPrint());
//  var myPrint = person.print.bind(person);
//  console.log(myPrint);

// function add(num)
// {
//     console.log(this);
//     return this.value+num;
// }
// var obj ={
//     value: 30
// }
// var binded = add.bind(obj);
// var result = binded(100);
// console.log(result);

// var person ={
//     name:'Alamin',
//     print:function()
//     {
//        //var name  = this.name
//         setTimeout(function(){
//             console.log(this);
//             console.log('Hello '+this.name);
//         }.bind(this),2000);
//     }
// }
// console.log(this === window);
// function hellothis()
// {
//     'use strict';
//     console.log(this);
// }
// hellothis()
// function unNamed()
// {
//     this.name='Almain';
// }
// unNamed();

// var myCustomObj ={
//     name:'Alamin',
//     age:25,
//     msg: function()
//     {
//         console.log('Kirrre '+this.name);
//     }
// };
// var myCustomObj ={
//     name:'Alamin',
//     age:25,
//     isTrue: function()
//     {
//         console.log(this === myCustomObj);
//     }
// };
// console.log(myCustomObj.isTrue());

// var myCustomObj ={
//     name:'Alamin',
//     age:25,
//     myanotherobj:{
//         name:'Jayeeema',
//         msg:function()
//         {
//             console.log('Hi Jayeema '+this.name);
//         }
//     }   
// };
var myCustomObj ={
    name:'Alamin',
    age:25,
    myanotherobj:{
        name:'Jayeeema',
        value:function()
        {
            console.log(this);
        }
    }   
};
myCustomObj.myanotherobj.value.call(myCustomObj);

