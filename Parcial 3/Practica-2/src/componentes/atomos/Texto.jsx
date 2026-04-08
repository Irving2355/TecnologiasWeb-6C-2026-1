import React from 'react'

function Texto({contenido}) {
  return (
    <p style={{
        color: '#555',
        lineHeight: '1.6'
    }}>
        {contenido}
    </p>
  )
}

export default Texto