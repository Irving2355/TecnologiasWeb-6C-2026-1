import TarjetaCurso from "../components/TarjetaCurso"
import { useFavoritos } from "../context/FavoritosContext"

function Favoritos() {
  const {favoritos} = useFavoritos()

  return (
    <section>
      <h1>Mis favoritos</h1>

      <div>
        {favoritos.map((curso) =>(
          <TarjetaCurso key={curso.id} curso={curso}/>
        ))}
      </div>
    </section>
  )
}

export default Favoritos
