import React from 'react'

import About from './components/About';
import {BrowserRouter,Routes, Route } from "react-router-dom"
import Validations from './components/Validations';
 const App = () => {
  
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Validations />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
