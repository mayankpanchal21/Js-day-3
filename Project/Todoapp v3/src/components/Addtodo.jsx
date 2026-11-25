import React from 'react'
import { useState } from 'react'
export const Addtodo = ({datahandle}) => {

    const [inp,setInp] = useState();
    const [date, setDate] = useState();

    function oninput(inp){
    //    console.log(inp);
       setInp(inp);
    
    }
    function ondate(date){
    //    console.log(date);
       setDate(date);
      
       
    }


  return (
    <div className="container w-25 mt-5">
            <div className="row">
              <div className="col">
                <input type="text" value={inp} onChange={(e)=>oninput(e.target.value)} placeholder='Enter your task...' />
              </div>
              <div className="col">
                <input type="date" value={date} onChange={(e)=>ondate(e.target.value)} />
              </div>
              <div className="col">
                <button type="button" className="theme-primary btn-solid btn-styled" onClick={()=>{datahandle(inp,date)
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
