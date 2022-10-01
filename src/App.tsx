import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Screen} from "./Components/Screen/Screen"
import "./Global.css"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   {/*   <createBrowserRouter> */}
        {/* <Route path='/' element={}/>   */}
     {/* </createBrowserRouter> */}
     <Screen/>
      
    </div>
  )
}

export default App
