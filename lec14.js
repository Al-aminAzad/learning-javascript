// function printMe()
// {
//     console.log('Hello '+this.name);
// }
// var obj1={
//     name:'Alamin',
//     age:25
// };
// var obj2={
//     name:'Jayeema',
//     age:24
// }
// var binded1=printMe.bind(obj1);
// var binded2=printMe.bind(obj2);
// console.log(binded1());
// console.log(binded2());
// printMe.call(obj1);
// printMe.call(obj2);

function add(a,b)
{
    return (a+b)*this.c;
}
var obj1={
    c:10
};
var obj2={
    c:5
}
var result = add.call(obj1,10,15);
var result1 = add.apply(obj1,[10,15]);
var binded= add.bind(obj1);
console.log(result);
console.log(result1);
console.log(binded(10,15));