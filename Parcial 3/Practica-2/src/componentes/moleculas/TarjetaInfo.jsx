import React from 'react'
import Texto from '../atomos/Texto'
import Boton from '../atomos/Boton'
import Titulo from '../atomos/Titulo'

function TarjetaInfo({titulo, descripcion, boton}) {
  return (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: '#f9f9f9'
    }}>
        <Titulo texto={titulo}/>
        <Texto contenido={descripcion}/>
        <Boton texto={boton}/> 
    </div>
  )
}

export default TarjetaInfo