import React from 'react'
import TarjetaAlumno from './TarjetaAlumno'
import TarjetaCurso from './TarjetaCurso'
import type { Alumno, Curso } from '../types'

function PanelPrincipal() {
    const alumnoEjemplo: Alumno = {
        nombre: 'Juana',
        edad: 23,
        activo: true
    }

    const cursoEjemplo: Curso = {
        nombre: 'Ensamblador',
        creditos: 8,
        docente: 'Jaime'
    }
  return (
    <div>
        <TarjetaAlumno alumno={alumnoEjemplo}/>
        <TarjetaCurso curso={cursoEjemplo}/>
    </div>
  )
}

export default PanelPrincipal