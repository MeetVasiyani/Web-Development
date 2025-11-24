// const obj = {
//     name : "Rohit",
//     age : 38,
//     greet : function(){
//         console.log("Hello")
//     }
// }

// console.log(obj.greet())
// obj.greet()

// console.log(obj.hasOwnProperty('greet'));
// console.log(obj.toString())

// const arr = [10,20,30]
// console.log(arr.length)

// const obj2 = {
//     account : 30
// }

// console.log(obj2.name)

// obj2.__proto__ = obj;
// console.log(obj2.name)

// const obj = {
//     name : "Rohit",
//     age : 38,
//     greet : function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// const obj1 = {
//     name : "Mohit",
//     age : 30,
//     greet : function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// const obj2 = {
//     name : "Mohan",
//     age : 28,
//     greet : function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi ${this.name}`)
    }
};

// const person1 = new Person("Rohit",20);
// console.log(person1.sayHi())

class Customer extends Person{
    constructor(name,age,account,balance){
        super(name,age);
        this.account = account;
        this.balance = balance;
    }
    checkBalance(){
        return this.balance;
    }
}

const Customer1 = new Customer("Mohan",34,4,456);
console.log(Customer1.balance)