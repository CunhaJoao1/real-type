import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Screen} from "./Components/Screen/Screen"
import "./Global.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Screen/>
    </div>
  )
}

export default App
