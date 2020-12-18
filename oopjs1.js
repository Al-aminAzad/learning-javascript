// var obj = {};
// var obj1 = new Object();
// console.log(obj);
// console.log(obj1);

var book = {
  name: "Functional Javascript",
  author: "meakbel Fogus",
  pulisher: "O'Reilly",
  page: 250,
  print: function () {
    console.log(this.name, this.author);
  },
};
book.publishedYear = 2010;
book["price"] = 500;
// console.log(book);
// book.print();
// console.log('book name: ' +book.name);
// console.log('book author: '+book['author']);
// console.log('Published year: '+book.publishedYear);
// console.log('Price: '+book.price);

for(var property in book)
{
    console.log(property + ' = ' +book[property]);
}
