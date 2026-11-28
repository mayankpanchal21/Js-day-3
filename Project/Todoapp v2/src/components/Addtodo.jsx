import React from 'react'
import { useState,useRef } from 'react'
export const Addtodo = ({datahandle}) => {

    const [inp,setInp] = useState('');
    const [date, setDate] = useState('');
    const a = useRef('');
    const b = useRef('');
    function oninput(inp){
    //    console.log(inp);
       console.log(a.current)
    
    }
    function ondate(date){
    //    console.log(date);
       setDate(date);
      
       
    }


  return (
    <div className="container w-25 mt-5">
            <div className="row">
              <div className="col">
                <input type="text" ref={a} value={inp} onChange={(e)=>oninput(e.target.value)} placeholder='Enter your task...' />
              </div>
              <div className="col">
                <input type="date" ref={b}  value={date} onChange={(e)=>ondate(e.target.value)} />
              </div>
              <div className="col">
                <button type="button" className="theme-primary btn-solid btn-styled" onClick={()=>{console.log(a.current.value,b.current.value)
                    setDate("");
                    setInp("");
                }}>
                  Add
                </button>
              </div>
              <h1>{inp}</h1>
            </div>
          </div>
  )
}
