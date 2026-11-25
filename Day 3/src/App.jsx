import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./assets/components/Item";
import Input from "./assets/components/Input";

const App = () => {
  let handleitem = function(){alert(`you buy product`)};
  return (
    <>
      <h1>List of Fooditem</h1>
      <div className="input">
       <Input/>
       
         
        <Item handle={handleitem}/>
      </div>
    </>
  );
};

export default App;
