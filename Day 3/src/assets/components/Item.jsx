import style from "./Item.module.css";
const Item = (props) => {
  let item = ["apple", "banana", "orange", "kiwi"];
  return (
    <>
      <ul class={`list-group ${style.list}`}>
        {item.map((i,index) => (
          <li key={index} className="list-group-item">
            {i}
            <button onClick={props.handle} type="button" class="float-end theme-primary btn-solid btn-styled">
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Item;
