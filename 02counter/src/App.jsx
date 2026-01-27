import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  

  const addValue = () =>{
    
    setCounter(prev => prev + 1)

  }
  const removeValue = () =>{
    setCounter(prev => prev - 1)
  }

  return (
    <>
      <h1>Hooks Chal Rha hai</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
