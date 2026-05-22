import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import NoEncontrado from './pages/NoEncontrado'
import './App.css'

// Lazy loading:
// Esta página no se carga desde el primer render.
// React la descargará hasta que el usuario entre a /estadisticas.
const Estadisticas = lazy(() => import('./pages/Estadisticas'))

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="contenedor">
        <Suspense fallback={<p className="cargando">Cargando módulo...</p>}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/estadisticas" element={<Estadisticas />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App
