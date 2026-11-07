// loop statement: to iterate something if condition is true...
// 1. while loop
// 2. do while loop
// 3. for loop
// 4. for in loop
// 5. for of loop


// 1. while loop

// let no = 1;
// while (no<10) {
//     console.log(no);
//     // no = no+3;
//     no++;
// }

// 2. do while loop

// let age = 19;
// do {
//     console.log(age);
//     age++;
// } while (age>18&&age<60);

// let i = 10;
// for (; i < 100; i++) {
//     console.log(i);
    
// }

// for in loop

// let name = "mayank";
let arr = [10,"mayank",[4,5],true,5.454];
// console.log(typeof arr);

// for ( let val of arr  ) {
//     console.log(val);
// }

let student = {
    name : "mayank",
    branch: "btech cs",
    year: 2027
}

for (mayank in student) {
    console.log(mayank);
}