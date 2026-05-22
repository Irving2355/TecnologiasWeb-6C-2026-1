function FiltrosCatalogo({
  busqueda,
  area,
  nivel,
  onBusqueda,
  onArea,
  onNivel
}) {
  return (
    <section className="panel">
      <h2>Filtros</h2>

      <div className="filtros">
        <div>
          <label htmlFor="busqueda">Buscar</label>
          <br />
          <input
            id="busqueda"
            value={busqueda}
            onChange={(e) => onBusqueda(e.target.value)}
            placeholder="Ej. Frontend"
          />
        </div>

        <div>
          <label htmlFor="area">Área</label>
          <br />
          <select
            id="area"
            value={area}
            onChange={(e) => onArea(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Diseño">Diseño</option>
            <option value="Datos">Datos</option>
            <option value="DevOps">DevOps</option>
          </select>
        </div>

        <div>
          <label htmlFor="nivel">Nivel</label>
          <br />
          <select
            id="nivel"
            value={nivel}
            onChange={(e) => onNivel(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default FiltrosCatalogo
