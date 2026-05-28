import { useState } from 'react'
import CursoCard from '../components/CursoCard'
import useCursosApi from '../hooks/useCursosApi'

function Cursos() {
  const { cursos, cargando, error, cargarCursos, borrarCurso } = useCursosApi()
  const [busqueda, setBusqueda] = useState('')

  const cursosFiltrados = cursos.filter((curso) =>
    curso.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    curso.area.toLowerCase().includes(busqueda.toLowerCase())
  )

  if (cargando) return <p className="message">Cargando cursos desde la API...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <section>
      <div className="panel">
        <h1>Cursos</h1>
        <p>
          Esta información viene desde el backend local. Prueba eliminar cursos
          o recargar la lista para observar la comunicación con la API.
        </p>

        <div className="toolbar">
          <input
            className="search"
            placeholder="Buscar por nombre o área..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <button className="secondary" onClick={cargarCursos}>
            Recargar
          </button>
        </div>
      </div>

      {cursosFiltrados.length === 0 ? (
        <p className="message">No hay cursos que coincidan con la búsqueda.</p>
      ) : (
        <div className="grid">
          {cursosFiltrados.map((curso) => (
            <CursoCard
              key={curso.id}
              curso={curso}
              onEliminar={borrarCurso}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Cursos
