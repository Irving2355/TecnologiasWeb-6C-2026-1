import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Cursos from './pages/Cursos'
import DetalleCurso from './pages/DetalleCurso'
import AcercaDe from './pages/AcercaDe'
import NoEncontrado from './pages/NoEncontrado'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="contenedor-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:id" element={<DetalleCurso />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
