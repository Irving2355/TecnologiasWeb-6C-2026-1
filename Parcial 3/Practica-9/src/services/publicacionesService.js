const API_URL = 'https://jsonplaceholder.typicode.com/'

export async function obtenerPublicaciones() {
    const respuesta = await fetch(`${API_URL}/posts`)

    if(!respuesta.ok){
        throw new Error('Error al obtener las publicaciones')
    }

    const datos = await respuesta.json()

    return datos.slice(0,12)
}

export async function obtenerPublicacionesPorId(id) {
    const respuesta = await fetch(`${API_URL}/posts/${id}`)

    if(!respuesta.ok){
        throw new Error('Error al obtener las publicacion')
    }

    return await respuesta.json()
}

export async function obtenerUsuariPorId(id) {
    const respuesta = await fetch(`${API_URL}/users/${id}`)

    if(!respuesta.ok){
        throw new Error('Error al obtener el usuario')
    }

    return await respuesta.json()
}