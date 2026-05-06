import { useEffect, useState } from "react"


function CronometroPanel() {
    const [segundos, setSegundos] = useState(0)
    const [activo, setActivo] = useState(false) 

    useEffect(() =>{
        if(!activo) return

        const intervalo = setInterval(()=>{
            setSegundos((previo) => previo+1)
        },1000)

        return ()=>{
            clearInterval(intervalo)
        }
    }, [activo]) 

  return (
    <div className="card shadow-sm mb-4">
        <div className="card-body">
        <h2 className="h4">Cronometro</h2>
        <p className="fs-4">{segundos} segundos</p>

        <button className="btn btn-warning ms-2"
        onClick={()=> setActivo(false)}>
            Pausar
        </button>

        <button className="btn btn-danger ms-2"
        onClick={()=> {
            setActivo(false)
            setSegundos(0)
            }}>
            Reiniciar
        </button>

        <button className="btn btn-primary ms-2"
        onClick={()=> setActivo(true)}>
            Iniciar
        </button>
        
        </div>
    </div>
    
  )
}

export default CronometroPanel