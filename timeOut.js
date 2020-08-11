console.log(1233);//1
function doSomething() {
    console.log(3333,"inside function");//3
}
console.log(2222);//2
// setTimeout(doSomething,10000);

setTimeout(()=>{
    console.log("i'm set time out");
    doSomething();
},5000)

setInterval(() => {
   console.log("i'm interval"); 
}, 1000);
            //1000ms =1 sec,10000ms =10 sec
console.log(4444);//4