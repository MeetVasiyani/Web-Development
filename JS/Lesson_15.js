// const orderDetail = {
//     orderId : 10,
//     foodItem : ['pizza','coke'],
//     cost : 600,
//     customerName : 'Meet',
//     customerLoc : 'Delhi',
//     restaurantLocation : 'Delhi'
// }

// function placedOrder(orderDetail,callback){
//     console.log(`${orderDetail.cost} Payment is progress`);
//     setTimeout(()=>{
//         console.log('Payment received and order placed');
//         orderDetail.status = true;
//         callback(orderDetail);
//     },3000)
// }

// function prepareOrder(orderDetail,callback){
//     console.log(`Your food preparation started of ${orderDetail.foodItem}` );
//     setTimeout(()=>{
//         console.log('Your order is now prepared');
//         orderDetail.token = 123;
//         callback(orderDetail);
//     },3000)
// }

// function pickupOrder(orderDetail,callback){
//     console.log(`Delivery boy is on way to pickup order ${orderDetail.restaurantLocation}`);
//     setTimeout(()=>{
//         console.log('I have picked up order');
//         orderDetail.received = true;
//         callback(orderDetail);
//     },3000)
// }

// function deliverOrder(orderDetail){
//     console.log(`I am on my way to deliver order ${orderDetail.customerLoc}`);
//     setTimeout(()=>{
//         console.log('Order Delivered');
//         orderDetail.delivery = true;
//     },3000)
// }

// placedOrder(orderDetail,(orderDetail) => {
//     prepareOrder(orderDetail,()=>{
//         pickupOrder(orderDetail,(orderDetail)=>{
//             deliverOrder(orderDetail);
//         });
//     });
// });
