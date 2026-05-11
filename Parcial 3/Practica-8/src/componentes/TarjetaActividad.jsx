
function TarjetaActividad({actividad}) {
  return (
    <article>
        <div>
            <h2>{actividad.titulo}</h2>

            {actividad.destacado && (
                <span>Destacado</span>
            )}
        </div>

        <p>{actividad.categoria}</p>
        <p>{actividad.responsable}</p>
        <p>{actividad.cupo}</p>
        
        {actividad.disponible ? (
            <span>Disponible</span>
        ) : (
            <span>Cupo lleno</span>
        )}
    </article>
  )
}

export default TarjetaActividad