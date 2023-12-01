import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Artist } from './Artist/Artist'
import Home from './Home/Home'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Artist/:id' element={<Artist />} />
    </Routes>

  </Router>
)



// npm run dev