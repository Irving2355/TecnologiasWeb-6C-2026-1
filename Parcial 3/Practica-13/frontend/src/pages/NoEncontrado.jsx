import { Link } from 'react-router'

function NoEncontrado() {
  return (
    <section className="panel">
      <h1>404</h1>
      <p>No encontramos la vista solicitada.</p>
      <Link className="button" to="/">Volver al inicio</Link>
    </section>
  )
}

export default NoEncontrado
