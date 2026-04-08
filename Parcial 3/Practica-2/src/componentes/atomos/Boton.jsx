import React from 'react'

function Boton({texto}) {
  return (
    <button style={{
        backgroundColor: '#222',
        color: 'white',
        border: 'none',
        padding: '10px 16px',
        cursor: 'pointer'
    }}>
        {texto}
    </button>
  )
}

export default Boton