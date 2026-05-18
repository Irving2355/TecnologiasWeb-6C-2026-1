import { Link } from 'react-router'

function NoEncontrado() {
  return (
    <section>
      <h1>Error 404</h1>

      <p>La página solicitada no existe.</p>

      <Link to="/">Volver al inicio</Link>
    </section>
  )
}

export default NoEncontrado
