const { useState, useEffect } = require("react");

function useCursos(){
    const [cursos, setCuros] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function cargarCursos() {
            try {
                const datos = await obtenerCuros()
                setCuros(datos)
            } catch (error) {
                setError(error)
            }finally{
                setCargando(false)
            }
        }

        cargarCursos()
    }, []) 

    return{
        cursos,
        cargando,
        error
    }
}

export default useCursos