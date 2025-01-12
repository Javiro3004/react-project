import { useState } from 'react'
import { Button } from "../components";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const coutnMore = () => {
    setCount((count)=> count + 1)
  }

  return (
        < Button label={`count is ${count}`} parentMethod={coutnMore}/>
  )
}

export default App
