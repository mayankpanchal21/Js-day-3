// object : which store data in key value pairs.

let std = {
    name: "aditya",
    branch : "btech cs",
    year : "2027",
    datadisplay: function(){
        console.log(this.name + "\t" + this.branch + "\t" + this.year);
    }
}
std.subject = ['tafl','dsa','cn','math4'];
// std.datadisplay();
// std.__proto__ = std2; // proto
// std.display();
// console.log(std);

let std2 = {
    display:()=>{
        console.log('displayingg student data.....');
    }
}

// for replicate you can use shift + alt + downarrowkey

let std3 = {
    "name-student": "aditya",
    branch : "btech cs",
    year : "2027",
    subject : ['tafl','dsa','cn','math4'],
    datadisplay: function(){
        console.log(this.name + "\t" + this.branch + "\t" + this.year);
    }
}

// console.log(std3.subject[0])
// iteration 
// for (let element of std3.subject) {
//     console.log(element);
// }

console.log(std3["name-student"]);
let ar = std3.subject.pop();
console.log(ar);
console.log(std3.subject.push('os'));
console.log(std3.subject);

// for (const e of std3.subject) {
//     if(e == 'dsa'){
       
//         console.log(indexof('e'));
//     } 
// }

// subject : ['tafl','dsa','cn','math4'],

function del(i){
    std3.subject.splice(1,i);
}

for (let i = 0; i < std3.subject.length; i++) {
    
    if (std3.subject[i] == 'dsa') {
        console.log(i);
        del(i);
        break;
    }
}

// console.log(std3.subject);


let s =  [10,20,30,40,50];

let c = s.filter((e)=>{
    return e>10;
})

console.log(c);