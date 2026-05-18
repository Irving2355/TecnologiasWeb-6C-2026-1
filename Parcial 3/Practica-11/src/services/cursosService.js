import { cursos } from '../data/cursos'

export function obtenerCursos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cursos)
    }, 800)
  })
}

export function obtenerCursoPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cursoEncontrado = cursos.find((curso) => curso.id === Number(id))

      if (!cursoEncontrado) {
        reject(new Error('Curso no encontrado'))
        return
      }

      resolve(cursoEncontrado)
    }, 600)
  })
}
