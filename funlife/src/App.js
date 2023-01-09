import React,{useEffect, useState} from "react";
import './App.css';
import Life from './Life';

function App() {
    const [name,setName]=useState("lifecycle");
    const [show, setShow]=useState(true);
   useEffect(()=>{
    //componentdidmount
   console.log("componentdid mount") 
   },[])
   useEffect(()=>{
    //componentdidupdate
   console.log("componentdidupdate" ,name) 
   },[name])
  return (
    <div className="App">
      
   <h1>function {name}</h1>
   <button onClick={()=> setName("function life cycle ")}>update</button>

    <button onClick={()=>setShow(!show)}>show/hide</button>
    { show ?<Life /> : null}
    </div>
  );
}

export default App;
