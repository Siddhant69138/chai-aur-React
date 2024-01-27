import { useState } from 'react'

import './App.css'

function App() {
  let[counter,setCounter]=useState(15)
  //let counter= 15


  
  const addValue =() =>{
    //console.log("clicked", counter);
   //counter=counter+1
   if (counter<20){
   setCounter(counter+1)
  }
}
  

  const removeValue=()=>{
    //console.log("clicked",counter);
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
