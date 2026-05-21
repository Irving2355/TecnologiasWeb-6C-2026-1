import { useEffect, useState } from 'react'
import { obtenerCursoPorId } from '../services/cursosService'

// Este hook carga el detalle de un solo curso.
// Recibe el id del curso como parámetro.
function useCursoDetalle(id) {
  const [curso, setCurso] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargarCurso() {
      try {
        setCargando(true)
        const datos = await obtenerCursoPorId(id)
        setCurso(datos)
      } catch (error) {
        setError(error.message)
      } finally {
        setCargando(false)
      }
    }

    cargarCurso()
  }, [id])

  return {
    curso,
    cargando,
    error
  }
}

export default useCursoDetalle