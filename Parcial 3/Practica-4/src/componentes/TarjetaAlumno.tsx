import React from 'react'
import type { Alumno } from '../types'

interface TarjetaAlumnoProps {
    alumno: Alumno
}

function TarjetaAlumno({alumno}: TarjetaAlumnoProps){
    return(
        <div
        style={{
            padding: '16px',
            margin: '10px'
        }}>
            <h2>Taejeta Alumno</h2>
            <p>Nombre: {alumno.nombre}</p>
            <p>Edad: {alumno.edad}</p>
            <p>Activo: {alumno.activo ? 'Si' : 'No'}</p>
        </div>
    )
}

export default TarjetaAlumno