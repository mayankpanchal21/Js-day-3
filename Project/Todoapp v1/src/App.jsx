import "bootstrap/dist/css/bootstrap.min.css";
import style from './App.module.css';
const App = () => {
  let todoitem = [
    {
      id: 0,
      task: "go to gym",
      date: "25-11-2025",
    },
    {
      id: 1,
      task: "meeting",
      date: "27-11-2025",
    },
  ];

  return (
    <>
      <h1 className="text-center">Todo App</h1>

      <div className="container w-25 mt-5">
        <div className="row">
          <div className="col">
            <input type="text" />
          </div>
          <div className="col">
            <input type="date" name="" id="" />
          </div>
          <div className="col">
            <button type="button" className="theme-primary btn-solid btn-styled">
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="container w-25 mt-5">
        <h1 className={`text-center ${style.color}`}>List</h1>
        <ul>
          {todoitem.map((item) => (
            <div key={item.id} className={`${style.list}`}>
              <li  className="list-group-item">{item.task}</li>
              <span>{item.date}</span>
               <button type="button" className="theme-danger btn-solid btn-styled">
              Delete
            </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
