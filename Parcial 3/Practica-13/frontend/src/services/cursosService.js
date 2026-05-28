import { apiRequest } from './apiClient'

export function listarCursos() {
  return apiRequest('/cursos')
}

export function obtenerCurso(id) {
  return apiRequest(`/cursos/${id}`)
}

export function crearCurso(curso) {
  return apiRequest('/cursos', {
    method: 'POST',
    body: JSON.stringify(curso)
  })
}

export function eliminarCurso(id) {
  return apiRequest(`/cursos/${id}`, {
    method: 'DELETE'
  })
}
