let marks = [12,13,14,15,16];

// for (var key in marks) {
//     console.log(key);
// }

// console.log(marks.length);

// let arr = [30, "Hello",true];
// console.log(arr[1])

// console.log(typeof arr)

// arr[2] = false;
// console.log(arr)

// arr.push(20);
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(25);
// console.log(arr)

// arr.shift();
// console.log(arr)

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// let arr2 = arr;
// arr2.push(30);
// console.log(arr);

// const arr = [12,13,14,15];
// let arr2 = [10,20]
// arr.push(40);
// console.log(arr)

// arr = arr2;
// console.log(arr);

// console.log(arr.slice(2,4));

// console.log(arr.splice(2));
// console.log(arr)

// arr1 = [10,20,30];
// arr2 = [40,50,60];
// arr3 = [70,80,90];


// arr1.push(arr2)
// const arr3 = arr1.concat(arr2);
// const arr4 = [...arr1,...arr2,...arr3]
// console.log(arr4);

// const arr = ["alice","Bob","Charlie"];
// console.log(arr.toString())
// console.log(arr.join("-"))
// console.log(arr.indexOf("Charlie"))
// console.log(arr.includes("Bob"))
// console.log(arr.lastIndexOf("Charlie"))

// arr.sort();
// arr.reverse();

// console.log(arr)

// const a = [101,80,90,32,91];
// a.sort((a,b)=>a-b);
// console.log(a)

const arr = [10,20,30,[40,50]];
console.log(arr.flat());