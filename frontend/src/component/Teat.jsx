import React, { useState } from "react";

function App() {
  console.log('hello');
  const [count, setCount] = useState(()=>{
    console.log('constructor');
    return 0;
  });
  const [name,setName]=useState(" ")
  function increment(){
    setCount(prevCount=>prevCount+1)
   
  }
  function decrement(){
    setCount(prevCount=>prevCount-1)
  }
  return (
   <>
  <div className="flex h-screen items-center justify-center gap-5 ">
    <input type="text" onChange={e=>setName(e.target.value)} className="border-2 "/>
    <h1>{name} has clicked {count}</h1>
     <button className="border-2 border-black rounded-md" onClick={decrement}>-</button>{count}<button className="border-2 border-black rounded-md" onClick={increment}>+</button>
     </div>
   </>
  );
}

export default App;