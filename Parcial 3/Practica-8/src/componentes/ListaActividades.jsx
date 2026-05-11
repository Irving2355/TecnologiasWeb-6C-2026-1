import MensajeVacio from "./MensajeVacio"
import TarjetaActividad from "./TarjetaActividad"

function ListaActividades({actividades}) {
    if(actividades.length === 0){
        return <MensajeVacio/>
    }

    return (
        <section>
            {actividades.map((actividad) =>(
                <TarjetaActividad
                key={actividades.id}
                actividad={actividad}
                />
            ))}
        </section>
    )
}

export default ListaActividades