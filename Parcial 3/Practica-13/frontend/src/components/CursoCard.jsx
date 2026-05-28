import { Link } from 'react-router'

function CursoCard({ curso, onEliminar }) {
  return (
    <article className="card">
      <span className="badge">{curso.area} · {curso.nivel}</span>

      <h2>{curso.nombre}</h2>

      <p>{curso.descripcion}</p>

      <p>
        <strong>{curso.duracionHoras}</strong> horas de duración
      </p>

      <div className="actions">
        <Link className="button" to={`/cursos/${curso.id}`}>
          Ver detalle
        </Link>

        <button className="danger" onClick={() => onEliminar(curso.id)}>
          Eliminar
        </button>
      </div>
    </article>
  )
}

export default CursoCard
