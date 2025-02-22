import React from 'react'
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}> 
      </Route> 
      <Route path="/gallery" element={<Gallery />}> 
      </Route> 
      <Route path="/contact" element={<Contact />}> 
      </Route>

      </Routes>
      </BrowserRouter>
    // <div className='bg-red-400'>
    //  App
    // </div>
  )
}

export default App
