import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'





function App() {
   return (
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home /> } />
           <Route path='/productdetails' element = {<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      
      
      
      

   
  )
}

export default App
