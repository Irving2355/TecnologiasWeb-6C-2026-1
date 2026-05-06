import { useEffect, useState } from "react"


function EstadoConexion() {
    const [conectado, setConectado] = useState(false)

    useEffect(()=>{
        console.log('Estado conexion')

        const intervalo = setInterval(()=>{
            setConectado((previo) => !previo)
        },3000) 

        return ()=>{
            clearInterval(intervalo)
        }
    }, []) 
  return (
    <div className="card shadow-sm mb-4">
        <div className="card-body">
            <h2 className="h4">Estado de conexion</h2>
            <p className={conectado ? 'text-succes fw-bold' : 'text-danger fw-bold'}>{conectado ? 'Coenctado' : 'Desconectado'}</p>
        </div>
    </div>
  )
}

export default EstadoConexion