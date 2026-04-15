import React, { useState } from 'react'

function PanelAlumno() {
    const [activo,setActivo] = useState(true)
    const [mostrarDetalles, setMostrarDetalles] = useState(true)
    const [nombre, setNombre] = useState('Maria Morelos Pavon')

  return (
    <div style={{
        border: '1px solid #ccc',
        padding: '16px',
        marginBottom: '20px',
        backgroundColor: activo ? '#eafbea' : '#fdeaea'
    }}>
        <h2>Panel del alumno</h2>

        <p>Nombre: {nombre}</p>

        <p>Estatus: {activo ? 'Activo' : 'Inactivo'}</p>

        <button onClick={() => setActivo(!activo)}>Cambiar estatus</button>

        <button onClick={() => setMostrarDetalles(!mostrarDetalles)} style={{marginLeft: '10px'}}>
            {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
        </button>

        <button onClick={()=> setNombre('Juan Daniel Arriaga')} style={{marginLeft: '10px'}}>
            Cambiar nombre
        </button>

        {mostrarDetalles && (
            <div style={{marginTop: '16px'}}>
                <p>Carrera: ISC</p>
                <p>Materia: Calculo Vectorial</p>
                <p>Semestre: 5° Semestre</p>
            </div>
        )}

    </div>
  )
}

export default PanelAlumno