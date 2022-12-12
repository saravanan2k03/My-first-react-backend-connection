import "./App.css";
import Nav from "./ui/Nav.jsx";
// import About from ".pages/About.jsx"
import React from "react";
import Emp from "./pages/employee";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop"
function App() {
  return (
    <>
        <Nav/>
      
        <Routes>
        <Route element={<Emp/>}/>
        <Route path="/Employee" element={<Emp/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Shop" element={<Shop/>}/> 
          
        </Routes>
    
      
    </>
  );
}

export default App;
