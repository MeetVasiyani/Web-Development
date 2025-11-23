//async await
//async function always return a promise
// async function greet(){
//     // return "Rohit";
//     return new Promise((resolve,reject)=>{
//         reject("Rohit");
//     })
// }


// const res = greet();

// res
// .then((data)=>{console.log(data);})
// .catch((error)=>{console.log("Error : ",error)});
// console.log(res);

// fetch('https://api.github.com/users')
// .then((response)=>response.json())
// .then((data)=>console.log(data));

// async function github() {
//     console.log("Bye World");
//     const res = await fetch('https://api.github.com/users');
//     const data = await res.json();
//     const parent = document.getElementById('first')
//     for(let user of data){
//         const ele = document.createElement('div');
//         ele.classList.add('user');

//         const image = document.createElement('img');
//         image.src = user.avatar_url;

//         const userName = document.createElement('h2');
//         userName.textContent = user.login;

//         const anchor = document.createElement('a');
//         anchor.href = user.html_url;
//         anchor.textContent = "Visit Profile"

//         ele.append(image,userName,anchor);
//         parent.append(ele);
//     }
// }

// github();
// console.log("Hello World")

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
                console.log('Payment received and order placed');
                orderDetail.status = true;
                resolve(orderDetail);

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

async function ordering(){
    const res1 = await placedOrder(orderDetail);
    const res2 = await prepareOrder(orderDetail);
    const res3 = await pickupOrder(orderDetail);
    const res4 = await deliverOrder(orderDetail);
}

ordering();