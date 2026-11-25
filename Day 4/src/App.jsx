import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Input from './components/Input';
import Errormess from './components/Errormess';
import { useState } from 'react';
const App = () => {
  // let arr = [];
  let arr = ['apple','banana','graphes'];
  let text = "asdf"
  const [color , setcolor] = useState(false);
  const inptxtarr = useState();
  const inptxt = inptxtarr[0];
  const setinpfun = inptxtarr[1];
  function change(e){
    
    console.log(e.target.value);
    setinpfun(e.target.value);
  }
  function onclick(Add){
   setcolor(!color);
  }
  

  return (
    <>
      <h1>List of Fruits</h1>
      <Input change = {change}/>
      <h1>{inptxt}</h1>
      {arr.length==0?<Errormess/>:<List onclick={onclick} Add={color} food= {arr}/>}
      
    </>
  )
}

export default App