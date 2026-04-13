import './App.css'
import TarjetaExplicatvia from './componentes/TarjetaExplicatvia'
import AsyncDemo from './componentes/AsyncDemo'

function App() {

  return (
    <div>
      <TarjetaExplicatvia 
        titulo="Cursos de aprendizaje"
        descripcion="Soy una descripcion"
      />

      <AsyncDemo/>
    </div>
  )
}

export default App
