
function TarjetaCurso({ curso }) {
  return (
    <article className="tarjeta">
      <h2>{curso.nombre}</h2>

      <p>
        <strong>Área:</strong> {curso.area}
      </p>

      <p>
        <strong>Duración:</strong> {curso.duracion}
      </p>

      <button>
        Agregar a favoritos
      </button>
    </article>
  )
}

export default TarjetaCurso
