import { useState } from 'react'

// Este componente muestra un resumen que cambia segun una opcion.

function FichaResumen() {
  const [modo, setModo] = useState('resumen')

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '16px',
        marginBottom: '20px',
        backgroundColor: '#f8f8f8'
      }}
    >
      <h2>Ficha resumen</h2>

      <button onClick={() => setModo('resumen')}>
        Ver resumen
      </button>

      <button
        onClick={() => setModo('completo')}
        style={{ marginLeft: '10px' }}
      >
        Ver completo
      </button>

      <div style={{ marginTop: '15px' }}>
        {modo === 'resumen' ? (
          <p>
            Alumno con información general visible.
          </p>
        ) : (
          <div>
            <p><strong>Nombre:</strong> Irving Cardona</p>
            <p><strong>Carrera:</strong> Ingeniería en Sistemas</p>
            <p><strong>Materia:</strong> Tecnologías Web</p>
            <p><strong>Grupo:</strong> 6C</p>
            <p><strong>Estatus:</strong> Activo</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FichaResumen