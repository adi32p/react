import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  //let counter=15

  const addval = () => {
    console.log("clicked",counter);
    counter = counter + 1;
    setCounter(counter)
  }
  const removeVal = () => {
    counter = counter - 1;
    setCounter(counter);
  } 
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addval}>Add value</button>
      <br />
      <button onClick={removeVal}>Remove value</button>
    </>
  )
}

export default App
