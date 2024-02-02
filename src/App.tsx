import React from "react"
import Home from "../app/Home.tsx"
import Signin from "../app/Signin.tsx"
import Signup from "../app/Signup.tsx"
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import '../src/index.css'
function App() {
  return (
 <div>
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<Home/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
 </div>
  )
}

export default App
