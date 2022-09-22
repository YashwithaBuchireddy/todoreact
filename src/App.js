import React from "react"
import background from "./todo2.png"
import Navbar1 from './components/Navbar1';
import Createtodo from "./pages/Createtodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<About />}>
        </Route>
        <Route exact path="/createtodo" element={<Createtodo />} >
      </Route>
    <Route exact path="/signup" element={<Signup/>}></Route>
    <Route exact path="/signout" element={<About/>}></Route>
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>


    </Routes>
    
  </BrowserRouter>
  )
 
}


export default App;
