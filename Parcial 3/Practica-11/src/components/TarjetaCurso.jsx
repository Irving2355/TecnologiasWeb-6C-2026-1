import { Link } from 'react-router'

function TarjetaCurso({ curso }) {
  return (
    <article className="tarjeta">
      <h2>{curso.nombre}</h2>

      <p>
        <strong>Área:</strong> {curso.area}
      </p>

      <p>
        <strong>Nivel:</strong> {curso.nivel}
      </p>

      <p>
        <strong>Duración:</strong> {curso.duracion}
      </p>

      <Link className="boton" to={`/cursos/${curso.id}`}>
        Ver detalle
      </Link>
    </article>
  )
}

export default TarjetaCurso
