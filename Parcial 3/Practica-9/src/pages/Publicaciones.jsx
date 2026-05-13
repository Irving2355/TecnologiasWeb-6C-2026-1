import { useEffect, useState } from 'react'
import { obtenerPublicaciones } from '../services/publicacionesService'
import TarjetaPublicacion from '../componentes/TarjetaPublicacion'

function Publicaciones() {
    const [publicaciones, setPublicaciones] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=> {
        async function cargarPublicaciones() {
            try {
                const datos = await obtenerPublicaciones()
                setPublicaciones(datos)
            } catch (error) {
                setError(error.message)
            } finally{
                setCargando(false)
            }
        }

        cargarPublicaciones()
    }, [])

    if(cargando){
        return(
            <section>
                <h2>Publicaciones</h2>
                <p>Cargando publicaciones...</p>
            </section>
        )
    }

    if(error){
        return(
            <section>
                <h2>Publicaciones</h2>
                <p>{error}</p>
            </section>
        )
    }

  return (
    <section>
        <h1>Publicaciones</h1>

        <p>Estas publicaciones se obtienen de la API</p>

        <div>
            {publicaciones.map((publicacion) => (
                <TarjetaPublicacion
                key={publicacion.id}
                publicacion={publicacion}
                />
            ))}
        </div>
    </section>
  )
}

export default Publicaciones