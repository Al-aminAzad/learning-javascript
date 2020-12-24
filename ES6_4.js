// let name = 'Alamin Azad';
// let email = 'alaminazad240@gmail.com';
// const Cat = {
//     name,
//     email,
//     print()
//     {
//         console.log(`Name = ${this.name} email = ${this.email}`);
//     }
// }
// Cat.print();
// console.dir(Cat);

const arr=[19,25,34];
let[a,b,c]=arr;
console.log(a);
console.log(c);

const obj ={
    name:'Alamin',
    age:25,
    job:'student'
}
// let name = obj.name;
// let age= obj.age;
let{name,age}=obj;
console.log(name,age);
const print = ({name,age}) =>{
    console.log(`Hello ${name} (${age})`);
}
print({age,name});