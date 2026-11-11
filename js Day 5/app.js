const arr = [10,25,12,30];
console.log(arr);

// let arr2 = arr.map((e)=>{
//      return e*e;
// })
console.log(
     arr.map(function(e){
      return e*e;
})
);

let arr3 = arr.reduce((t,v)=>{
    return t =+v; 
})

console.log(arr3);


console.log(Array.from("Harry"));
