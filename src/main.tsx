import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App.tsx'
import Cadastro from './page/cadastrado/Cadastro.tsx'
import Frutas from './page/fruits/Frutas.tsx'
import Hortaliças from './page/vegetables/Hortaliças.tsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/frutas" element={<Frutas />} />
        <Route path="/hortaliças" element={<Hortaliças />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
