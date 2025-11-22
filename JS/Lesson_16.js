// console.log("Hello World Starts");

// const p1 = fetch('https://api.github.com/users')
// const p2 = p1.then((res)=>{
//     return res.json();
// });

// p2.then((res)=>{
//     console.log(res);
// })

// const p1 = new Promise((resolve,reject) => {
//     reject("Hello");
// })

// p1.then((res)=>{
// console.log(res)

// }).catch((err)=>{
// console.log(err)
// })

// fetch('https://api.github.com/users')
//     .then((res) => {
//         console.log(res);
//         if(!res.ok){
//             throw new Error('Data not present in server')
//         }
//         return res.json();
//     })
//     .then((data) => {
//         // console.log(data);
//         const parent = document.getElementById('first');
//         for (let i = 0; i < data.length; i++) {
//             const ele = document.createElement('img');
//             ele.src = data[i].avatar_url;
//             ele.style.height = "40px";
//             ele.style.width = "40px";
//             ele
//             parent.append(ele);
//         }

//     })
//     .catch((error)=>{
//         const parent = document.getElementById('first');
//         parent.textContent = error;
//     })

// console.log("Hello World End");

// const j1 = {
//     name : "Rohit",
//     age : 30,
//     address : "Delhi"
// }

// //convert to json

// const jsonformat = JSON.stringify(j1);
// console.log(jsonformat)

// //json to js object

// const j2 = `{
//     "name" : "Rohit",
//     "age" : 30,
//     "address" : "Delhi"
// }`

// const jsonobject = JSON.parse(j2);
// console.log(jsonobject)




const orderDetail = {
    orderId: 10,
    foodItem: ['pizza', 'coke'],
    cost: 600,
    customerName: 'Meet',
    customerLoc: 'Delhi',
    restaurantLocation: 'Delhi'
}

function placedOrder(orderDetail) {
    console.log(`${orderDetail.cost} Payment is progress`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.9) {
                console.log('Payment received and order placed');
                orderDetail.status = true;
                resolve(orderDetail);
            }
            else{
                reject("Payment failed");
            }

        }, 3000)
    })

}

function prepareOrder(orderDetail) {
    console.log(`Your food preparation started of ${orderDetail.foodItem}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Your order is now prepared');
            orderDetail.token = 123;
            resolve(orderDetail);
        }, 3000)
    })

}

function pickupOrder(orderDetail) {
    console.log(`Delivery boy is on way to pickup order ${orderDetail.restaurantLocation}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('I have picked up order');
            orderDetail.received = true;
            resolve(orderDetail);
        }, 3000)
    })

}

function deliverOrder(orderDetail) {
    console.log(`I am on my way to deliver order ${orderDetail.customerLoc}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Order Delivered');
            orderDetail.delivery = true;
            resolve(orderDetail)
        }, 3000)
    })

}

placedOrder(orderDetail)
    .then((orderDetail) => prepareOrder(orderDetail))
    .then((orderDetail) => pickupOrder(orderDetail))
    .then((orderDetail) => deliverOrder(orderDetail))
    .then((orderDetail) => { console.log(orderDetail) })
    .catch((err) => { console.log(err) })
    .finally(()=>{console.log("i am doing cleanup")});