// const aProise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(true){
//            resolve(`I am here`);
//         }else{
//             reject('Ohh Failed');
//         }
//     },1000)
// })
// const promisehandle = async()=>{
//     const data = await aProise;
//     console.log(data);
// }
// promisehandle();

const getMyname = new Promise(resolve => resolve('Alamin'));
const getage = (name)=>{
    return new Promise((resolve,reject)=>{
        if(name == 'Alamin'){
            resolve(21);
        }else{
            reject(`Not found`);
        }
    })
}
getMyname.then((name)=>{
    getage(name).then((age)=>{
        console.log(`My name is ${name} and ${age} years old`);
    })
})

const getdetails = async()=>{
    const name = await getMyname;
    const age = await getage(name);
    console.log(`My name is ${name} and ${age} years old puka puka puka`);
}
getdetails();