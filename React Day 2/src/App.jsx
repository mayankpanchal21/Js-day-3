import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import Image from "./Image";
import Food from "./Food";
import Appname from "./components/Appname";
import Input from "./components/Input";
import {Result, Hello} from "./components/Result";
function App() {
  let list = ["watch", "colddrink", "headphone", "phone"];

  return (
    <>
      {/* <Heading />
      <Image /> */}
      {/* <Food food={list} /> */}
      {/* todo  */}
     <Appname/>
      <br />
     <Input/>
     <Result/>
     <Hello/>
     
    </>
  );
}

export default App;
