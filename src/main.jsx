import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Navbar from './components/Navbar'
import FormRegister from './pages/formRegister'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/register' element={<FormRegister/>}/>
     </Routes>
  </BrowserRouter>
)
