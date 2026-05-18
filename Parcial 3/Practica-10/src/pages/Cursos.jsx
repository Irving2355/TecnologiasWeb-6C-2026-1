import { cursos } from '../data/cursos'
import TarjetaCurso from '../components/TarjetaCurso'

function Cursos() {
  return (
    <section>
      <h1>Cursos disponibles</h1>

      <p>
        Selecciona los cursos que deseas marcar como favoritos.
      </p>

      <div className="grid-cursos">
        {cursos.map((curso) => (
          <TarjetaCurso key={curso.id} curso={curso} />
        ))}
      </div>
    </section>
  )
}

export default Cursos
