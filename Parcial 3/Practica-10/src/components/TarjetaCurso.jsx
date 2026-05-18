import { useFavoritos } from "../context/FavoritosContext"

function TarjetaCurso({ curso }) {
  const{
    agregarFavoritos,
    estaEnFavoritos
  } = useFavoritos()

  const favoritos = estaEnFavoritos(curso.id)

  return (
    <article className="tarjeta">
      <h2>{curso.nombre}</h2>

      <p>
        <strong>Área:</strong> {curso.area}
      </p>

      <p>
        <strong>Duración:</strong> {curso.duracion}
      </p>

      <button onClick={() => agregarFavoritos(curso)}>
        Agregar a favoritos
      </button>
    </article>
  )
}

export default TarjetaCurso
