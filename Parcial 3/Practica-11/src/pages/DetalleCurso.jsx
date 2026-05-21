import { Link, useParams } from 'react-router'
import useCursoDetalle from '../hooks/useCursoDetalle'
import useTituloDocumento from '../hooks/useTituloDocumento'

function DetalleCurso() {
  const { id } = useParams()
  const { curso, cargando, error } = useCursoDetalle(id)

  useTituloDocumento(curso ? curso.nombre : 'Detalle del curso')

  if (cargando) {
    return <p className="cargando">Cargando detalle...</p>
  }

  if (error) {
    return (
      <section>
        <p className="error">{error}</p>
        <Link to="/cursos">Volver a cursos</Link>
      </section>
    )
  }

  return (
    <section className="panel">
      <h1>{curso.nombre}</h1>

      <p>
        <strong>Área:</strong> {curso.area}
      </p>

      <p>
        <strong>Nivel:</strong> {curso.nivel}
      </p>

      <p>
        <strong>Duración:</strong> {curso.duracion}
      </p>

      <p>{curso.descripcion}</p>

      <Link to="/cursos">Volver a cursos</Link>
    </section>
  )
}

export default DetalleCurso