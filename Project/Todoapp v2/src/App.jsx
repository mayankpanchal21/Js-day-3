// import "bootstrap/dist/css/bootstrap.min.css";
// import style from './App.module.css';
// import { useState } from "react";
// import { Addtodo } from "./components/Addtodo";
// import { Todoitems } from "./components/Todoitems";
// import Message from "./components/Message";
// import Todoname from "./components/Todoname";
// const App = () => {
 
//     const [itemlist,setItemlist] = useState([]);
    
//     function datahandle(inp, date){
    
//       setItemlist(  [
//         ...itemlist,
//         {
//           task: inp,
//           date: date
//         }
//       ]);
     
//     }
//       function deltodo(item){
//         console.log(item);
//         let updateitem = itemlist.filter((i)=>i.task!==item)
//         setItemlist(updateitem);
//       }
   

//   return (
//     <>
//       <Todoitems></Todoitems>
//       <Addtodo datahandle={datahandle}/>
//         <h1 className={`text-center ${style.color}`}>List</h1> 
//       <Message itemlist={itemlist}/>
//       <Todoitems ref={a} deltodo={deltodo}  todoitem={itemlist}/>
      
//     </>
//   );
// };

// export default App;


import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
