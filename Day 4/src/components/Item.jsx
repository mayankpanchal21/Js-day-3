import React from 'react'
import { FaFacebook } from "react-icons/fa";

const Item = ({item,Add, onclick}) => {
console.log(Add);
  return (
    <li className={`list-group-item ${Add && 'active'}`}>{item}
    <button type="button" onClick={()=>onclick(Add)} className="theme-primary btn-solid btn-styled float-end">
  Add
</button>
<FaFacebook />
    </li>
  )
}

export default Item