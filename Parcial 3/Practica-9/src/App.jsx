import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import NavBar from './componentes/NavBar'
import Inicio from './pages/Inicio'
import Publicaciones from './pages/Publicaciones'
import DetallePublicacion from './pages/DetallePublicacion'
import NoEncontrado from './pages/NoEncontrado'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>

    <main>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/publicaciones' element={<Publicaciones/>}/>
        <Route path='/publicaciones/:id' element={<DetallePublicacion/>}/>
        <Route path='*' element={<NoEncontrado/>}/>
      </Routes>
      
    </main>
    </BrowserRouter>
  )
}

export default App