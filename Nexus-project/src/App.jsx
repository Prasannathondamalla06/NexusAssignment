import { useState } from 'react'
import Home from  "./Component/Home";
import Footer from "./Component/Footer" ;
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Footer />
   
      
   </div>
  )
}

export default App
