import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import {Screen} from "./Components/Screen/Screen"
import "./Global.css"
import {
  BrowserRouter,

  Route,
  Link,
} from "react-router-dom";
import ReactRoutes from './Components/Routes/Routes';
import Api from './Components/Api/Api';



function App() {
  const [count, setCount] = useState(0)
 /*  useEffect(()=>{
    Api.get('/signin', ).then(res =>{
      console.log(res.data[0])
    })
  },[]) */
  return (
  <>
  
     <ReactRoutes/>
  </>

  )
}

export default App
