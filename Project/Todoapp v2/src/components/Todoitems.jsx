
import { Todoitem } from './Todoitem';
export const Todoitems = (props) => {
  return (
       <div className="container w-25 mt-5">
        <ul>
          {props.todoitem.map((item) => (
            <Todoitem deltodo={props.deltodo} item={item}/>
          ))}
        </ul>
      </div>
  )
}
