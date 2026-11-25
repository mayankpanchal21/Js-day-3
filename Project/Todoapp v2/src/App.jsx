import "bootstrap/dist/css/bootstrap.min.css";
import style from './App.module.css';
import { useState } from "react";
import { Addtodo } from "./components/Addtodo";
import { Todoitems } from "./components/Todoitems";
const App = () => {
  // let todoitem = [];
  // let todoitem = [
  //   {
  //     id: 0,
  //     task: "go to gym",
  //     date: "25-11-2025",
  //   },
  //   {
  //     id: 1,
  //     task: "meeting",
  //     date: "27-11-2025",
  //   },
  // ];

    const [itemlist,setItemlist] = useState([]);
    // function datahandle(inp, date){
    //   console.log(inp,date)
    //   let newitem = [
    //     ...itemlist,
    //     {
    //       task: inp,
    //       date: date
    //     }
    //   ]
    //   setItemlist(newitem);
    // }
    function datahandle(inp, date){
    
      setItemlist(  [
        ...itemlist,
        {
          task: inp,
          date: date
        }
      ]);
     
    }
      function deltodo(item){
        console.log(item);
        let updateitem = itemlist.filter((i)=>i.task!==item)
        setItemlist(updateitem);
      }
   

  return (
    <>
      <h1 className="text-center">Todo App</h1>

      <Addtodo datahandle={datahandle}/>
        <h1 className={`text-center ${style.color}`}>List</h1> 
      {itemlist.length===0&&<h1 className="text-center">No task for do</h1>}
      <Todoitems deltodo={deltodo}  todoitem={itemlist}/>
      
    </>
  );
};

export default App;
