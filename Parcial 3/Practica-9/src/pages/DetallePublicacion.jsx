import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router'
import { obtenerPublicacionesPorId, obtenerUsuariPorId } from '../services/publicacionesService'

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

                const datosUsuario = await obtenerUsuariPorId(datosPublicacion.userId)
                setUsuario(datosUsuario)
            } catch (error) {
                setError(error)
            }finally{
                setCargando(false)
            }
        }

        caragarDetalle()
    },[id])


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
    <section style={{ padding: '20px' }}>
      <h1>{publicacion.title}</h1>

      <p>{publicacion.body}</p>

      {usuario && (
        <div
          style={{
            marginTop: '20px',
            padding: '16px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            backgroundColor: '#fff'
          }}
        >
          <h2 style={{ fontSize: '1.2rem' }}>
            Autor
          </h2>

          <p>
            <strong>Nombre:</strong> {usuario.name}
          </p>

          <p>
            <strong>Correo:</strong> {usuario.email}
          </p>

          <p>
            <strong>Empresa:</strong> {usuario.company.name}
          </p>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <Link to="/publicaciones">
          Volver a publicaciones
        </Link>
      </div>
    </section>
  )
}

export default DetallePublicacion