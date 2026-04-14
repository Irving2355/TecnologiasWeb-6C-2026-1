import React from 'react'
import type { Curso } from '../types'

interface TarjetaCursoProps {
    curso: Curso
}

function TarjetaCurso({curso}: TarjetaCursoProps) {
  return (
    <div style={{
        margin: '10px',
        padding: '16px'
    }}>
        <h2>Tarjeta Curso</h2>
        <p>Nombre: {curso.nombre}</p>
        <p>Creditos: {curso.creditos}</p>
        <p>Docente: {curso.docente}</p>
    </div>
  )
}

export default TarjetaCurso