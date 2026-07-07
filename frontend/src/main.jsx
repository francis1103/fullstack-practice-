import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import RegisterForm from './page/jsx/RegisterForm.jsx'
import Home from './page/jsx/Home.jsx'
import Login from './page/jsx/Login.jsx'
import About from './page/jsx/About.jsx'
import Fee from './page/jsx/Fee.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<RegisterForm />}/>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/fee" element={<Fee />}/>
  </Routes>
  
  </BrowserRouter>
    
)
