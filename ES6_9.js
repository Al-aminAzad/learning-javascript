// console.log('First call');
// setTimeout(()=>{
//     console.log('Second one');
// },5000);
// console.log('Third one');
// setTimeout(()=>{
//     console.log('Fourth one');
// },300);

// let myfirstpromise = new Promise((resolve,reject)=>{
//     let name='Alamin';
//     setTimeout( ()=>resolve(name),3000);
// })

// myfirstpromise
//     .then( (name)=>{
//         console.log(`My name is ${name}`);
//     })
fetch("https://jsonplaceholder.typicode.com/users")
  .then((respons) => respons.json())
  .then((body) => {
    const lis = body.map(data=>{
        let li = document.createElement('li');
        let text = `Name: ${data.name}, Email: ${data.email}`;
        let textNode = document.createTextNode(text);
        li.appendChild(textNode);
        return li; 
    });
    lis.forEach(li => {
        document.getElementById('mylist').appendChild(li);
    })
  })
  .catch((err) => {
    console.log(err);
  });


