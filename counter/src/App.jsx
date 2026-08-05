import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
function App() {

  let [counter,setCount] = useState(0);
  

  const addValue = () => {
    // counter++ ;
    // counter = 843 ;
    setCount(counter+1);
    setCount(counter+1);
    setCount(counter+1);
    console.log(counter);
  }
  const removeValue = () => {
    // counter-- ;
    if(counter>0) setCount(counter-1);
    console.log(counter)
  }
  return (
    <>
      <h1>A Counter Project</h1>
      <h2>Count value : {counter}</h2>

      <button onClick={addValue}>Add value</button> <br />
      <button onClick={removeValue}>Remove val</button>
    </>
  )
}

export default App
