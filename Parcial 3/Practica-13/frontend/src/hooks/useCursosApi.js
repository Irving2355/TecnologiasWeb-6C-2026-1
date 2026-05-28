import { useEffect, useState } from 'react'
import { eliminarCurso, listarCursos } from '../services/cursosService'

function useCursosApi() {
  const [cursos, setCursos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const cargarCursos = async () => {
    try {
      setCargando(true)
      setError(null)
      const data = await listarCursos()
      setCursos(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }

  const borrarCurso = async (id) => {
    const confirmar = window.confirm('¿Seguro que deseas eliminar este curso?')
    if (!confirmar) return

    try {
      await eliminarCurso(id)
      setCursos((previos) => previos.filter((curso) => curso.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    cargarCursos()
  }, [])

  return {
    cursos,
    cargando,
    error,
    cargarCursos,
    borrarCurso
  }
}

export default useCursosApi
