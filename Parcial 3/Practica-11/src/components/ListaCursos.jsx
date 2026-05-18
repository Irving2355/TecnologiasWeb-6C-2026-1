import TarjetaCurso from './TarjetaCurso'


function ListaCursos({ cursos }) {
  if (cursos.length === 0) {
    return (
      <div className="mensaje">
        No hay cursos que coincidan con los filtros seleccionados.
      </div>
    )
  }

  return (
    <section className="grid-cursos">
      {cursos.map((curso) => (
        <TarjetaCurso key={curso.id} curso={curso} />
      ))}
    </section>
  )
}

export default ListaCursos
