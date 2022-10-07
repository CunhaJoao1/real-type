import {Screen} from "../Screen/Screen"


import {Routes,Route,Link, Router} from "react-router-dom";
  

  import React from 'react'
import Home from "../WebAplication/Home";
import { RequireAuth } from "../Contexts/Auth/RequireAuth";
  
  export default function ReactRoutes() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Screen/>}/>
          <Route path="/home" element={ <RequireAuth><Home/></RequireAuth> }/>
        </Routes>
      </div>
    )
  }
  