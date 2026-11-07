let a = 10;
let b = 5;


// a, b,* -----> a*b;
// a,b - operands
// * - operator
// a*b - expression

// console.log(a*b);

// types of operators:
// 1. Arthemetic operator
// 2. Asignment operator
// 3. ternary operator
// 4. logical operator
// 5. comparision or Relational operator


//  Arthemetic operator

// let num = 54;
// let num2 = '5';
// let conc = num + num2;
// let sum  = Number(num2) + num ;
// let sub = num - num2;
// let mul = num * num2;
// let div = num / num2;
// let exp = num ** num2;
// let mod = num % num2;

// console.log(conc); 
// console.log(sum); 
// console.log(sub); 
// console.log(mul); 
// console.log(div); 
// console.log(exp); 
// console.log(mod);

// 
// 2. Asignment operator

let num = 54;
let num2 = '5';
let bol = true;
let nodef = null;

// = or == or ===

// = - for asign value
// == - campare and check value.
// === - campare , check value , and datatype;

// let a1 = 5;
// console.log(typeof a1);
// let b1 = '5';
// console.log(typeof b1);

// console.log(a1=b1);
// console.log(typeof a1);


// ternary operator

let age = 68;

age>=18?console.log('drive car'):console.log('ghar beth jao') 
// you choose result on the based of condition.


// 4. logical operator
age>=18&&age<60?console.log('you are young'):console.log("you are old or kid");
// && - And operator (both condition should be true)
// || - Or operator (one condition should be true)
// ! - Not (it will give opsite);


// 5. comparision or Relational operator

// > , < , >= , <= , !=

let a2 = 5;
let b2 = 10;

console.log(a2>b2);
console.log(a2<b2);
console.log(a2>=b2);
console.log(a2<=b2);
console.log(a2!=b2);
