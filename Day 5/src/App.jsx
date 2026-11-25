// import {useState,useContext,createContext} from 'react';
// import Component2 from './Component2';

// export const usercontxt = createContext();

// const App = () => {
//   const [name,setName] = useState('mayankhjsajdlfhlsahdlfjl');

//   return (
//     <usercontxt.Provider value={name}>
//       <h1>{name}</h1>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
//       <Component2/>
//     </usercontxt.Provider>
//   )
// }

// export default App

// import {useState,useEffect} from 'react';

// const App = () => {
//   const [count,setCount]= useState(0)
//   // useEffect(()=>setTimeout(()=>setCount(count+1),2000));
//   const [name,SetName] = useState();

//   function call(){

//     setInterval(() => {
//       setCount(currentCount => currentCount + 1);
//       console.log(currentCount);
//     }, 2000)
    
//   }

//   useEffect(()=>{console.log('i m useeffect...')},[name,count])


  // useEffect(() => {
  // const timer = setInterval(() => {
  //   setCount(currentCount => currentCount + 1);
  // }, 2000);

//   return () => clearInterval(timer);
// }, []);

//   console.log('hey i m rendering...');
  
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={()=>call()}>click me</button>
//       <input type="text" value={name} onChange={(e)=>SetName(e.target.value)}/>
//     </>
//   )
// }

// export default App;


import {useRef,useState,useEffect} from 'react'

const App = () => {
  const [name,setName] = useState("mayank");
  let ref = useRef(0);
  useEffect(()=>{console.log('hey i am rerendering......useeffect')})

   function handleClick() {
    ref.current = ref.current + 1;
    console.log('You clicked ' + ref.current + ' times!');
  }


  return (
    <>
    <h1>{name}</h1>
    <h1>{ref.current}</h1>
      <button onClick={handleClick}>
      Click me!
    </button>
    </>
  )
}

export default App;