const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DBMS calls, cryptigraphy, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})
promiseOne.then(() => {
    console.log("promise consumed");
})

new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({userName: "chai", email: "chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
 console.log(user)
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"hitesh",password: "123"}) 
        }else{
            reject('error: something went wrong')
        }
    }, 1000)
})
 promisefour
 .then((user)=> {
    console.log(user);
    return user.username
}).then((username)=>{
 console.log(username);
}).catch((error)=>{
console.log(error)
}).finally(()=>console.log("the promise is either resolved or rejected"));



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"Javascript",password: "123"}) 
        }else{
            reject('error: JS went wrong')
        }
    }, 1000)
})
 async function consumePromiseFive(){
 try {
    const response = await promiseFive
    console.log(response)
 } catch (error) {
    console.log(error)
 }
}
consumePromiseFive()

// async function getAllUsers (){
//     try {
//         const response = await  fetch('https://jsonplaceholder.typicode.com/users')
      
//         const data = await response.json()
//         console.log(data)
      
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))


