//import './App.css'
import PanelPrincipal from "./componentes/PanelPrincipal"

function App() {

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '30px auto',
        padding: '20px',
        fontFamily: 'Arial'
      }}
    >
      <h1>Práctica 5 de React</h1>
      <p>
        En esta práctica trabajamos useState con una interfaz más
        cercana a una mini aplicación real.
      </p>

      <PanelPrincipal />
    </div>
  )
}

export default App
