
function FiltrosCursos({
  busqueda,
  areaSeleccionada,
  onCambiarBusqueda,
  onCambiarArea
}) {
  return (
    <section className="panel">
      <h2>Filtros</h2>

      <div className="formulario-filtros">
        <div>
          <label htmlFor="busqueda">Buscar por nombre</label>
          <br />
          <input
            id="busqueda"
            type="text"
            value={busqueda}
            onChange={(e) => onCambiarBusqueda(e.target.value)}
            placeholder="Ej. React"
          />
        </div>

        <div>
          <label htmlFor="area">Filtrar por área</label>
          <br />
          <select
            id="area"
            value={areaSeleccionada}
            onChange={(e) => onCambiarArea(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Diseño">Diseño</option>
            <option value="Servicios externos">Servicios externos</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default FiltrosCursos
