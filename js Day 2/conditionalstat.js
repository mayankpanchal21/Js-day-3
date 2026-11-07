// comments : single line or multi line comments - it is basically used for keep note inside the code.

// - single line
/* multi line */
// a = 10;
/* let a = 25;
 console.log(a); */

// ctrl + /

// conditional statements :
// 1. if statement
// 2. if else statement
// 3. elif statement
// 4. nested if-else statement
// 5. switch case statement

// let age = 19;
// if statement
// if(age<18){
//     console.log('kid');
// }

// if else statement

// if(age<18){
//     console.log('kid');
// }
// else
//     console.log('adult');

// elif statement

// let age = 21;
// let name = "mayank";
// if(age<=10){
//     console.log('you are kid');
// }
// else if(age>10&&age<60){
//     console.log('you are adult');
// }
// else{
//     console.log('senior citizen.');
// }

// nested statement

// if(age>18){
//     if(name != "" ){
//         console.log('you can put your details....');
//     }
//     else{
//         console.log('fill your name');
//     }
// }

// 5. switch case statement
let age = 60;

switch (age) {
  case 18:
    console.log("required DL ...");
    break;
    
    case 60:
        console.log("not required DL anymore...");
        break;
        
    default:
    console.log('i am default.....');
    break;
}
