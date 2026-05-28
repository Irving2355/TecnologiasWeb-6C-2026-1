import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { obtenerCurso } from '../services/cursosService'

function DetalleCurso() {
  const { id } = useParams()
  const [curso, setCurso] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargarDetalle() {
      try {
        setCargando(true)
        setError(null)
        const data = await obtenerCurso(id)
        setCurso(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setCargando(false)
      }
    }

    cargarDetalle()
  }, [id])

  if (cargando) return <p className="message">Cargando detalle...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <section className="panel">
      <span className="badge">{curso.area} · {curso.nivel}</span>
      <h1>{curso.nombre}</h1>
      <p>{curso.descripcion}</p>
      <p><strong>Duración:</strong> {curso.duracionHoras} horas</p>

      <Link className="button secondary" to="/cursos">
        Volver a cursos
      </Link>
    </section>
  )
}

export default DetalleCurso
