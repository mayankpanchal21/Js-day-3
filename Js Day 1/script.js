let h = document.querySelector('h1');
// h.innerText = "Diet" ; 
// h.innerText = "<h1>Hello</h1>" ; 
// h.innerHTML = "<h1>Hello</h1>"
// h.innerHTML = "<p>Hello</p>"
// console.log('hello world');
h.style.backgroundColor = "pink";
h.style.color = "brown";

let p = document.createElement('p');
p.innerText =  "hey i am para";
h.appendChild(p);

p.style.color = "blue";




