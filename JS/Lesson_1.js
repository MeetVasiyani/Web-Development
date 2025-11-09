// let name = "Meet";
// console.log(name)

// let age = 20
// console.log(name, age);

// age = 30
// console.log(age);


// const acc = 1234;
// console.log(acc);

// acc = 12345
// console.log(acc);

// var a = 12;
// console.log(a)

// var a = 20;
// console.log(a)

// if(true){
//     var xz= 12;
// }

// console.log(xz);

// function name() {
//     var s = 12
// }

// console.log(s);

//Datatypes

//Number
// let a = 10
// let b = 10.5
// console.log(typeof(a))
// console.log(typeof(b))

//String
// let c = "Hello"
// console.log(typeof(c))

//Boolean

// let a = false
// console.log(typeof(a))

//Undefined

// let d;
// console.log(typeof(d))

//BigInt

// let c = 12345678910111213141516171820212223242526272829n;
// console.log(typeof(c))

//NULL

// let weather = null
// console.log(weather)
// console.log(typeof(weather))

//Symbol
// let id = Symbol("id")
// console.log(typeof(id))

//array - object
// let a = [10,20,20]
// console.log(typeof(a))

//object
// let obj = {name : "Meet",age : 18}
// console.log(typeof(a))

//Function

// let s = function hello() {
//     return "hello";

// }

// console.log(typeof s);

//Primitive datatype is immutable

// let a = 12;
// a = 23
// console.log(a)

//Non - Primitive datatype is mutable

let obj = {name : "Meet",age : 18}
let obj2 = obj
obj2["name"] = "Panda"
console.log(obj)