import { Link } from "react-router"

function TarjetaPublicacion({publicacion}) {
  return (
    <article>
        <h2>{publicacion.title}</h2>

        <p>{publicacion.body.substring(0,90)}</p>

        <Link to={`/publicaciones/${publicacion.id}`} >Ver detalle</Link>
    </article>
  )
}

export default TarjetaPublicacion