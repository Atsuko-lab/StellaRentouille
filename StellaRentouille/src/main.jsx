import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Accueil from './components/Accueil/index.jsx'
import Marche from './components/Marche/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/marche" element={<Marche />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);