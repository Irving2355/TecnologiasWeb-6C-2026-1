import './App.css'
import Saludo from './componentes/Saludo'
import Presentacion from './componentes/Presentacion'

function App() {

  return(
    <div>
      <h1>Mi primera pagina de React</h1>
      <p>Este es el componente App.jsx</p>

      <Saludo />
      <Presentacion nombre="Irving" material="React"/>

    </div>
  )
}

export default App
