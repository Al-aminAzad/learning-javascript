const aPromise = control =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(control){
                resolve('A simple succes data');
            }else{
                reject('Simple error data');
            }
        },3000)
    })
}
aPromise(true)
.then((data)=>{
    console.log(data);
})
.catch((data)=>{
    console.log(data);
})
const promise1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){
            resolve('Promise 1 resolved');
        }else{
            reject('Promise 1 failed');
        }
    },5000)
})
const promise2 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){
            resolve('Promise 2 resolved');
        }else{
            reject('Promise 2 failed');
        }
    },5000)
})
Promise.all([promise1,promise2])
.then((data)=>{
    console.log(data);
})