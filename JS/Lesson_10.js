//Scope
// Global -> accessible to everyone
// block -> accessible to only that block
// functional -> accessible to only that function

// let a = 10;
// const b = 20;
// var e = 90;

// if(true){
//     let d = 30
// console.log(b);
//     console.log(d);
//     console.log(e);
// }

// console.log(d);


// function greet(){
//     let c = 30;
//     console.log(a);
// }

// console.log(c);
// greet();



// let global = 30;

// function greet(){
//     let global = 40;
//     function meet(){
//         let global = 10;
//         console.log(global);
//     }
//     meet();
// }

// greet();


// function createCounter(){
//     let count = 0;
//     function increment(){
//         console.log("I am Increment function");
//         count++;
//         return count;
//     }
//     return increment;
// }

// let counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let balance = 500;

// let user = {
//     deposit : function(amount){
//         if(typeof amount == "number" && amount > 0){
//             balance += amount;
//             return balance;
//         }
//     },
//     withdraw : function(amount){
//         if(typeof amount == "number" && amount > 0 && balance >= amount){
//             balance -= amount;
//             return balance;
//         }
//     },
//     getBalance : function(amount){
//         return balance;
//     }
// }

// balance += 400;
// user.balance = 500;
// console.log(user.deposit(200))

// function createBankAccount() {
//     let balance = 500;

//     return{
//         deposit: function (amount) {
//             if (typeof amount == "number" && amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function (amount) {
//             if (typeof amount == "number" && amount > 0 && balance >= amount) {
//                 balance -= amount;
//                 return balance;
//             }
//         },
//         getBalance: function (amount) {
//             return balance;
//         }
//     }
// }

// const customer = createBankAccount();
// console.log(customer.withdraw(200));


//Higher Order Function

// function double(value){
//     return function execute(num){
//         return num*value
//     }
// }

// const n = double(20)(5);
// console.log(n);