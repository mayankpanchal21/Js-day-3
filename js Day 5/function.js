// function - block of code that execute when we call it.
// types of function

// 1. Named function
// 2. arrow function
// 3. Anonymous function
// 4. Immediate function
// 5. return function
// 6. callback function

let name = "asdf";

// 1. Named function
function hello() {
  if (name == "mankk") {
    console.log(`good morning ${name}`); //template interpolation
  }
}
//  2. arrow function
let ey = (name) => {
  console.log("i am arrow function.." + name);
};

// hello();
// ey();
// ey(name);
// 4. Immediate function
// (function h(){
//     console.log('i m immediate function....')
// })();

// 5. named/return function

function order(item) {
  // return `your item ${item} is order...`
  console.log(`your item ${item} is order...`);
}

// let myorder = order('pizza');

// order('pizza');

// 6. callback function : callback function is a function that passed as argument to other function.

// function Display(c){
//     console.log(`the sum : ${c}`);
// }

// function calc(a,b,Display){
//     let c = a+b;
//     Display(c);
// }

// calc(4,5,Display);
// function Display(c){
//     console.log(`the sum : ${c}`);
// }

// function orderr(item,Display){
//     console.log('your item is order...');
//     Display(item);

// }

// orderr('pizza',Display);

// function uske andar immediate function tha

function greet(a, b, sum) {
  console.log("Hello Mr");
  setTimeout(()=>{
    sum(a + b)
  },1000);
  
}

// c =()=>{
//     console.log('good morning..');
// }

greet(10, 5, (c) => {
    console.log("First call....");
  let res = c;
  console.log(res);
  greet(2,5, (d) => {
      console.log("second call....");
    console.log(d);
    greet(21, 22, (e) => {
        console.log("third call....");
      console.log(e);

      // console.log('good morning..');
    });
    // console.log('good morning..');
  });
  // console.log('good morning..');
});


// synchronous - execute code line by line , not executeable for waiting task.
// asycnhroour programming - wait krleta h task...