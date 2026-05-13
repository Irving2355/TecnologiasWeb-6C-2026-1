import { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import { obtenerPublicacionesPorId } from '../services/publicacionesService'

function DetallePublicacion() {
    const {id} = useParams()

    const [publicacion, setPublicaciones] = useState(null)
    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function caragarDetalle() {
            try {
                const datosPublicacion = await obtenerPublicacionesPorId(id)
                setPublicaciones(datosPublicacion)
            } catch (error) {
                
            }finally{

            }
        }
    })
  return (
    <div>DetallePublicacion</div>
  )
}

export default DetallePublicacion