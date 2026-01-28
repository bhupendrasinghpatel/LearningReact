import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  } 

  return (
    <>
    <Card channel='chaipeelo' someObj={myObj}/>
      
       
    
    </>
  )
}

export default App
