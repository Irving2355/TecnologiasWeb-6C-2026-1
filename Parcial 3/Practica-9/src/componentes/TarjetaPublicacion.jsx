
function TarjetaPublicacion({publicacion}) {
  return (
    <article>
        <h2>{publicacion.title}</h2>

        <p>{publicacion.body.substring(0,90)}</p>

        <link to={`/publicaciones/${publicacion.id}`} >Ver detalle</link>
    </article>
  )
}

export default TarjetaPublicacion