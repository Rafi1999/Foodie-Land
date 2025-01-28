import { useState } from 'react'

import './App.css'
import Home from './Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  )
}

export default App
