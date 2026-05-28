import { useState } from 'react'
import { Link } from 'react-router'
import CursoForm from '../components/CursoForm'
import { crearCurso } from '../services/cursosService'

function NuevoCurso() {
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState(null)
  const [creado, setCreado] = useState(null)

  const guardarCurso = async (curso) => {
    try {
      setEnviando(true)
      setError(null)
      const respuesta = await crearCurso(curso)
      setCreado(respuesta.curso)
    } catch (err) {
      setError(err.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section>
      <div className="panel">
        <h1>Nuevo curso</h1>
        <p>
          Este formulario envía datos al backend usando una petición POST.
        </p>
      </div>

      <CursoForm onSubmit={guardarCurso} enviando={enviando} />

      {error && <p className="error">{error}</p>}

      {creado && (
        <div className="panel">
          <p className="success">Curso creado correctamente.</p>
          <h2>{creado.nombre}</h2>
          <p>{creado.descripcion}</p>
          <Link className="button" to="/cursos">Ver cursos</Link>
        </div>
      )}
    </section>
  )
}

export default NuevoCurso
