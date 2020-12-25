// function sum(...num){
//     return num.reduce((a,b)=>a+b);
// }
// let result = sum(10,20,30,40);
// console.log(result);

// let arr=[1,2,3,4,5];
//  arr = [...arr,6,7,8,9];
// console.log(arr);
// console.log(...arr);

// let obj ={
//     name:'Alamin',
//     age:25
// }
// let obj2 = {
//     ...obj
// }
// console.log(obj2);

// var number = [1,2,3,4];
// function sum(a,b,c,d)
// {
//     console.log('Sum = '+(a+b+c+d));
// }
//  sum(...number);
// sum.apply(null,number);

// var arrname = ['Alamin','Jayeema','Azad','Mokarrama'];
// arrname.unshift('Tanvir');
// console.log(arrname);
// arrname.push('Ahmmed');
// console.log(arrname);
// arrname = ['Bangladesh',...arrname,'Language'];
// console.log(arrname);
// let arrone=[1,2];
// let arrano=[6,7];
// arrone = [...arrone,...arrano];
// console.log(arrone);

// function arguments5(){
//     for(var i=0;i<arguments.length;i++){
//         console.log('Arguments passed = '+arguments[i]);
//     }
// }
// arguments5('Alamin','Azad','Jayeema');

// let arguments6 = ()=>{
//     for(let i=0;i<arguments.length;i++){
//         console.log(`Arguments passed = ${arguments[i]}`);
//     }
// }
// arguments6('Bnagladesh','Sri lanka','Japan');

// const restp = (...anyName) =>{
//     for(let i=0;i<anyName.length;i++){
//         console.log(`Arguments passed= ${anyName[i]}`);
//     }
// }
// restp('Local','Vocal','Dokan');

const restp = (...anyName) =>{
    // for(let i=0;i<anyName.length;i++){
    //     console.log(`Arguments passed= ${anyName[i]}`);
    // }
    anyName.map(oneargu => console.log(`Arguments passed= ${oneargu}`));
}
restp('Local','Vocal','Dokan');

const myfun = (personName,age,...others)=>{
    console.log(`My name is ${personName} and ${age} years old.`);
    others.map(other => console.log(`Arguments passed: ${other}`))
}
myfun('Alamin azad',25,'Hello',1212,'Bhai');