import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Accueil from './components/Accueil/index.jsx'
import Marche from './components/Marche/index.jsx'
import Header from './components/Header/index.jsx'
import NousContacter from './components/NousContacter/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/marche" element={<Marche />} />
        <Route path='/contact' element={<NousContacter/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);