// array - collection of items it could be of any type.

let arr = ["diet" , 100 , ['btech' ,'bba','bca'],97.5,{cs:true}];

// console.log(arr);
// console.log(typeof arr);

// access the indices

console.log(arr[0])
console.log(arr[1]);

// arr.forEach(element => {
//     console.log(element);
// });

// for (const element of arr) {
//     console.log(element)
// }

console.log(arr.length)
console.log(arr.slice(0,3))
console.log(arr.shift());
console.log(arr)
console.log(arr.unshift('college'));
console.log(arr)
console.log(arr.push('asdf'));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.includes(97.5));