function print(...args) {
  args.forEach((e) => {
    console.log(e);
  });
}
// console.log('calling 1st time...........')
// print(10,20);
// console.log('calling 2nd time...........')
// print(10,20,30);
// console.log('calling 3rd time...........')
// print(10,20,30,40,50);

// callback hell

// function checkinv(callback) {
//   setTimeout(() => {
//     console.log("checking inventory.....");
//     callback();
//   }, 2000);
// }
// function placeorder(callback) {
//   setTimeout(() => {
//     console.log("place order.....");
//     callback();
//   }, 1000);
// }
// function deliveryitem(callback) {
//   setTimeout(() => {
//     console.log("deliveryyy item.....");
//     callback();
//   }, 2000);
// }
// function invoice(callback) {
//   setTimeout(() => {
//     console.log("generate invoice...");
//     callback();
//   }, 1000);
// }

// function main() {
//   checkinv(() => {
//     placeorder(() => {
//       deliveryitem(() => {
//         invoice(() => {
//           console.log("All done...");
//         });
//       });
//     });
//   });
// }
// main();


// using promises

function checkinv(callback){
  return new Promise((res, rej)=>{
   setTimeout(() => {
    res("checking inventory.....");
    callback;
  }, 2000);
})
}

function check(){
  return new Promise((res,rej)=>{
    console.log('hello');
    res('hello');
  })
  console.log('hey');
}

//  function placeorder(){
//    return new Promise((res, rej)=>{
//      setTimeout(() => {
//        res("checking inventory.....");
//       }, 1000);
//       // callback();
//     }
//   )
// }


// console.log(checkinv());


console.log(check());

































// let checkinv = new Promise((res, rej)=>{
//    return setTimeout(() => {
//     res("checking inventory.....");
//   }, 2000);
//   // callback();
// }
// )

// let placeorder = new Promise((res, rej)=>{
//    return setTimeout(() => {
//     res("checking inventory.....");
//   }, 1000);
//   // callback();
// }
// )
// let deliveryitem = new Promise((res, rej)=>{
//    return setTimeout(() => {
//     res("checking inventory.....");
//   }, 2000);
//   // callback();
// }
// )
// let invoice = new Promise((res, rej)=>{
//   return setTimeout(() => {
//     res("checking inventory.....");
//   }, 1000);
//   // callback();
// }
// )

// checkinv.then((e)=>{
//   console.log(e);
//   placeorder.then(e=>{
//     console.log(e);
//     deliveryitem.then(e=>{
//       console.log(e);
//       invoice.then(()=>{
//         console.log('all set.....');

//       })
//     })
//   })
// })

