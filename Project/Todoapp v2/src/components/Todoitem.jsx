import React from "react";
import style from "../App.module.css";
export const Todoitem = (props) => {
  return (
    <div key={props.item.id} className={`${style.list}`}>
      <li className="list-group-item">{props.item.task}</li>
      <span>{props.item.date}</span>
      <button type="button" className="theme-danger btn-solid btn-styled" onClick={()=>{props.deltodo(props.item.task)}}>
        Delete
      </button>
    </div>
  );
};
