import React from 'react'

function Titulo({texto}) {
  return (
    <h2 style={{
        marginBottom: '10px',
        color: '#222'
    }}>
        {texto}
    </h2>
  )
}

export default Titulo