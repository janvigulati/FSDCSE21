//promises:object
//promise way 1
const promiseOne=new Promise((resolve,reject)=>{
    console.log("promise done");
    resolve("operation succcessful");

})
promiseOne.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})