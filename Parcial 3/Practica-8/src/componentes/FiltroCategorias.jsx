
function FiltroCategorias({categoriaSeleccionada, onCambiarCategoria}) {
  return (
    <section>
        <label htmlFor="categoria">Filtro por categoria</label>

        <select 
        name="" id="categoria"
        onChange={(e) => onCambiarCategoria(e.target.value)}
        value={categoriaSeleccionada}>
            <option value="Todas">Todas</option>
            <option value="Taller">Taller</option>
            <option value="Conferencia">Conferencia</option>
            <option value="Panel">Panel</option>
        </select>
    </section>
  )
}

export default FiltroCategorias