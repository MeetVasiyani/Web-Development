//foreach , map, filter, reducer, set

// const arr = [10,20,30,"Hello",90]

// arr.forEach((Element)=>{
//     console.log(Element);
// })

// const arr = [10,20,30,5,90,15,89]

// arr.forEach((number,index,arr)=>{
//     console.log(number,index,arr);
// })

// let sum = 0;
// arr.forEach((number)=>{
//     sum += number;
// })
// console.log(sum)


// const arr = [10,20,30,5,90,15,89]

// const arr1 = arr.filter((number)=>number > 70);

// console.log(arr1)

// const compare = (num) => num > 80;

// Array.prototype.filtering = function(compare){

//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num)
//         }
//     }
//     return ans;
// }

// const arr2 = arr.filtering((num) => num > 20);
// console.log(arr2);


// const arr = [10,20,30,5,90,15,89]

// const arr1 = arr.map((num)=> num*2);

// console.log(arr1)

// arr = [10,20,30];

// Array.prototype.mapping = function(maps){
//     let ans = [];
//     for(let num of this){
//         ans.push(maps(num));
//     }
//     return ans;
// }

// const arr2 = arr.mapping((num)=>num*2);
// console.log(arr2)

// const arr = [10,20,30,5,90,15,89]

// let ans = arr.reduce((accumulator,currentvalue)=>{
//     return accumulator+=currentvalue;
// },0);

// console.log(ans);

// const arr = [10,20,25,15,10,20];
// console.log(arr);

// const s1 = new Set(arr);
// s1.add(11);
// console.log(s1.has(11));
// s1.delete(11);
// console.log(s1.size);
// s1.clear();
// console.log(s1);

// const uniqueNumber = [... new Set(arr)];
// console.log(uniqueNumber);

const m1 = new Map(
    [
        ["ABC",40],
        [2,"XYZ"],
        [true,11],
        [[11,12,13],67],
    ]
);

m1.set({name : "Manish",age : 20},false)
console.log(m1);
console.log(m1.size);