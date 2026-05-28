import { HashRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Cursos from './pages/Cursos'
import DetalleCurso from './pages/DetalleCurso'
import NuevoCurso from './pages/NuevoCurso'
import NoEncontrado from './pages/NoEncontrado'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:id" element={<DetalleCurso />} />
          <Route path="/nuevo" element={<NuevoCurso />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
