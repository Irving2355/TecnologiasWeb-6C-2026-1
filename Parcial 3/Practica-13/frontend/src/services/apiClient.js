const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.mensaje || 'Ocurrió un error en la petición')
  }

  return data
}
