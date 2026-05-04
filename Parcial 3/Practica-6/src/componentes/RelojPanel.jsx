import { useEffect, useState } from 'react'

function RelojPanel() {
    const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString())

    useEffect(() =>{
        const intervalo = setInterval(() =>{
            setHoraActual(new Date().toLocaleTimeString())
        },1000)

        return () =>{
            clearInterval(intervalo)
        }
    }, [])

  return (
    <div className='card shadow-sm mb-4'>
        <div className="card-body">
            <h2 className="h4">Reloj del sistema</h2>
            <p className="mb-0 fs-4">{horaActual}</p>
        </div>
    </div>
  )
}

export default RelojPanel