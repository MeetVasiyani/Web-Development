//function

// function greeting(){
//     console.log("Hello World")
// }

// greeting();

// function add(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4
//     console.log(`Sum : ${sum}`);
// }

// add(10,21)
// add(6,7,8)
// add(6,7,8,9)

// console.log(add);


// function add(...num){
//     console.log(num)
//     let sum = 0
//     for (let n of num){
//         sum += n;
//     }
//     console.log(`Sum : ${sum}`);
// }

// add(6,7,8,9)

// const arr = [11,12,13,14]
// const arr1 = [21,22,23,24]

// const [first,sec,...third] = arr;
// console.log(first,sec,third)

// const ans = [...arr,...arr1]
// console.log(ans)

// const addnum = function (num1,num2) {
//     return num1+num2;
// }

// console.log(addnum(12,13))


// console.log(addnum(12,13))

// function addnum(num1,num2) {
//     return num1+num2;
// }

//arrow function

// const add = (num1,num2) => console.log(num1+num2);
// add(12,12)

// if we have single parameter no need of this ()

// const sq = num => num*num;
// console.log(sq(34))

// const greeting  = () => {
//     return {
//         name : "Rohit",
//         age : 12
//     }
// }

// const greeting  = () => ({name : "Rohit",age : 12});

// console.log(greeting());


//IIFE

// (function greet() {
//     console.log("Hello")
// })();

// (() => console.log("hi"))();

// function greet(){
//     console.log("Hello")
// }

// function dance(){
//     console.log("Dancing")
// }

// function meet(callback){
//     console.log("Meeting")
//     callback();
//     console.log("Meeting finished")
// }

// meet(greet);
// meet(dance);

function payment(amt,callback){
    console.log(`${amt} payment initialized`);
    console.log("payment received");
    callback();
}

function zomatoOrderPlaced(){
    console.log("food preparation");
}

function blinkitOrderPlaced(){
    console.log("Order packing");
}

payment(300,blinkitOrderPlaced);
payment(500,zomatoOrderPlaced);