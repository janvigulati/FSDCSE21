//synchronous and asynchronous programming
//synchronous
// function hello(){
// console.log("Hello,World");
// }
// hello();
// console.log("this is synchronous programming");
//async programming 
const hello = () => {
    setTimeout(()=>{
        console.log("hello,world");

    },2000);
}
hello();
console.log("this is asynchronous programming");



