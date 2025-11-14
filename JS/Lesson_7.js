// const user = {
//     name : "Hello",
//     age : 20,
//     emailId: "hello@gmail.com",
//     amount : 30000,
//     "address" : "dwarka"
// }
// console.log(user)
// console.log(user.amount)
// user.aadhar = 1234;
// console.log(user)

// user.amount = 40000
// console.log(user)

// delete user.aadhar
// console.log(user)

// console.log(user["name"])
// console.log(user["address"])

// const user = {
//     name : "Hello",
//     age : 20,
//     emailId: "hello@gmail.com",
//     amount : 30000,
//     "address" : "dwarka"
// }

// const user2 = user;
// user2.age = 30
// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let key in user){
//     console.log(key,user[key])
// }

// const user = {
//     name : "Hello",
//     age : 20,
//     emailId: "hello@gmail.com",
//     amount : 30000,
//     "address" : "dwarka"
// }

// const name = user.name
// const age = user.age


// const {name,age} = user;
// console.log(name,age)

// const {name : userName,age : userAge} = user;
// console.log(userName,userAge)


// const arr = [10,20,40,90,11];
// const [a,b,...c] = arr;
// console.log(a,b,c)

// for(let keys of Object.keys(user)){
//     console.log(keys,user[keys])
// }

// for(let values of Object.values(user)){
//     console.log(values)
// }

// for(let [key,val] of Object.entries(user)){
//     console.log(key,val)
// }

// const user = {
//     name : "Meet",
//     age : 20,
//     emailId: "hello@gmail.com",
//     amount : 30000,
//     "address" : "dwarka",
//     greeting : function () {
//         console.log(`Hello ${this.name}`)
//     }
// }

// user.greeting();

// const user = {
//     name : "Meet",
//     age : 20,
//     emailId: "hello@gmail.com",
//     amount : 30000,
//     address : {city : "rajkot", state : "Gujarat"}
// }

// console.log(user.address.city);

// Shallow Copy
// const user2 = {...user}
// user2.name = "Mohan"
// user2.address.city = "jamnagar"
// console.log(user);
// console.log(user2);

//Deep Copy
// const user2 = structuredClone(user);
// user2.address.city = "jamnagar"
// console.log(user2)

// Keys : String || Symbol 
// const user = {
//     name : "Mohan",
//     0 : 100,
//     1 : "ABC"
// }

// console.log(user["0"])

const sym = Symbol("id");
const user = {
    [sym] : "Hello"
}

console.log(user[sym]);