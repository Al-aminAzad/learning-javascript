// function print()
// {
//     console.log('Hello ES5 function');
// }
// print();

// const print = (name) =>{
//     console.log(`Hello ES6 function ${name}`);
// }
// print('Alamin');

// const addMe = (a,b) =>{
//     return a+b;
// };
// console.log(addMe(15,4));

// const addMe = (a,b) => a+b;
// console.log(addMe(12,4));

// const sqr = x => x*x;
// console.log(sqr(5));

// const dob = [1996, 1995, 1991, 1971];
// const currentage5 = dob.map(function(age){
//     return 2020-age;
// });
// console.log(currentage5);

// const currentage6 = dob.map(age => 2020-age);
// console.log(currentage6);

// const currentage62 = dob.map((age,index)=>`${index}: ${2020-age}`);
// console.log(currentage62);

// const currentage622 = dob.map(age =>{
//     const result = 2020-age;
//     return result;
// });
// console.log(currentage622);

// const obj = {
//   name: "Alamin",
//   print: function()
//   {
//       setTimeout(() =>{
//           console.log(this.name);
//       },1000)
//   }
// };
// obj.print();

// const lex5 = {
//     aFun : function(){
//         console.log(this);
//         return function(){
//             console.log(this);
//         }
//     }
// }
// lex5.aFun()();
//  const lex6 = {
//      aFun6 : ()=>{
//          console.log(this);
//          return ()=>{
//              console.log(this);
//          }
//      }
//  }
//  lex6.aFun6()();
const lex56 ={
    aFun56:function(){
        console.log(this);
        return  ()=> console.log(this);
    }
}
lex56.aFun56()();