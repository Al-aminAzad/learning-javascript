// function hello(name) {
//   print();
// }
// function print(arg) {
//   console.log("Hello" + " " + arg);
// }
// print("Alamin");

// function hello(name, print) {
//   print(name);
// }

// hello("Alamin", function (a) {
//   console.log("Hello" + " " + a);
// });
// hello("Alamin", function (a) {
//   console.log("Hi how are you" + " " + a + "?");
// });
// hello("Azad", function (a) {
//   console.log("Length of name is " + a.length);
// });
// // function print(a) {
// //   console.log();
// // }

// var me = {
//   name: "Al-amin",
//   age: 18,
//   email: "alaminazad240@gmail.com",
// };

// function printmyself(person, callback) {
//   console.log("Person: " + person.name + "(" + person.age + ")");
//   if (person.age >= 18) {
//     callback(person.email);
//   }
// }

// printmyself(me, function (email) {
//   console.log("Email sent to " + email);
// });

// function print(data, callback1, callback2) {
//   console.log("Main data is: " + data);
//   callback1(data);
//   callback2(data);
// }
// print(
//   "Hello I am alamin. I am learning Javascript",
//   function (data) {
//     console.log("Uppercase: " + data.toUpperCase());
//   },
//   function (data) {
//     console.log("Lowercase: " + data.toLowerCase());
//   }
// );

///////////////////////////////////
// const getVar = () =>
// {
//   setTimeout(function(){
//     console.log('This function takes some time');
//   },3000)
// }
// const printSomething = () =>
// {
//   console.log('This is another function');
// }
// console.log(getVar());
// console.log(printSomething());

///////////////////////
const getVar = (callback) =>
{
  setTimeout(function(){
    console.log('This function takes some time');
    callback();
  },3000)
}
const printSomething = () =>
{
  console.log('This is another function');
}
console.log(getVar(printSomething));


