import FiltrosCatalogo from '../components/FiltrosCatalogo'
import TarjetaCurso from '../components/TarjetaCurso'
import useCatalogoOptimizado from '../hooks/useCatalogoOptimizado'

function Catalogo() {
  const {
    busqueda,
    area,
    nivel,
    setBusqueda,
    setArea,
    setNivel,
    cursosFiltrados,
    resumen,
    cambiarInscripcion
  } = useCatalogoOptimizado()

  return (
    <section>
      <div className="panel">
        <h1>Catálogo de cursos</h1>

        <p>
          Abre la consola del navegador para observar cuándo se recalculan
          filtros y cuándo se renderizan tarjetas.
        </p>

        <p>
          <strong>Total:</strong> {resumen.total} |
          <strong> Inscritos:</strong> {resumen.inscritos} |
          <strong> Horas:</strong> {resumen.horas}
        </p>
      </div>

      <FiltrosCatalogo
        busqueda={busqueda}
        area={area}
        nivel={nivel}
        onBusqueda={setBusqueda}
        onArea={setArea}
        onNivel={setNivel}
      />

      <div className="grid">
        {cursosFiltrados.map((curso) => (
          <TarjetaCurso
            key={curso.id}
            curso={curso}
            onInscribir={cambiarInscripcion}
          />
        ))}
      </div>
    </section>
  )
}

export default Catalogo
