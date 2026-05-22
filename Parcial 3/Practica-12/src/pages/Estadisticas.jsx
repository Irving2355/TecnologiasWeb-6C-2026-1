import { cursos } from '../data/cursos'

// Esta página se carga con lazy loading.
// Es un ejemplo de módulo que no se necesita en la primera carga.
function Estadisticas() {
  const totalCursos = cursos.length

  const cursosPorArea = cursos.reduce((acumulador, curso) => {
    acumulador[curso.area] = (acumulador[curso.area] || 0) + 1
    return acumulador
  }, {})

  return (
    <section className="panel">
      <h1>Estadísticas</h1>

      <p>
        Esta página fue cargada de forma diferida usando lazy loading.
      </p>

      <p>
        <strong>Total de cursos:</strong> {totalCursos}
      </p>

      <h2>Cursos por área</h2>

      <ul>
        {Object.entries(cursosPorArea).map(([area, cantidad]) => (
          <li key={area}>
            {area}: {cantidad}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Estadisticas
