import { useState } from 'react'
import Home from  "./Component/Home";
import Header from "./Component/Header" ;
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
      </Routes>
    </BrowserRouter>
   
      
   </>
  )
}

export default App
