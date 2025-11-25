// this call bind apply
// strickt mode vs non strickt mode
// 'use strict'
//Global object : In browser it is called window and in node js it is called global
//globalThis refers to global object in environment
//this keyword in browser refers to global object window and in NodeJS it refers to empty object
//in normal functions : without strick mode this will point to global object and in strickt mode it will point to undefined

// var a = 10;
// var b = 20;

// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }

// greet("Rohit","Mohit")

// console.log(window)
// console.log(global)
// console.log(this)

//  const user = {
//     name : "Rohit",
//     age : 38,
//     greet : function(){
//         console.log(this)
//         console.log(`Hello ${this.name}`)
//     }
// }
// const user2 = {
//     name : "Mohit"
// }
// user2.greet = user.greet;
// user2.greet();
// user.greet();

'use strict'

// function greet(){
//     console.log(`hi ${this.name}`)
// }
// const user1 = {
//     name : "Rohit",
//     age : 30
// }
// const user2 = {
//     name : "Mohit",
//     age : 10
// }
// greet.call(user1)

// function increment_age(value,name){
//     this.age += value;
//     this.name = name
//     console.log(this.name);
//     console.log(this.age);
// }

// increment_age.call(user2,5,"Mota")
// increment_age.apply(user2,[5,"Mota"])
// const incr = increment_age.bind(user2,5,"Mota")
// console.log(incr)

// Arrow Function : Does not have this keyword
// 'use strick'

// const greet = ()=>{
//     console.log(this);
// }

// greet();

const stopwatch = {
    second : 0,
    start : function(){
        const that = this;
        setInterval(()=>{
            this.second++;
            console.log(this.second);
        },1000)
    }
}

stopwatch.start();