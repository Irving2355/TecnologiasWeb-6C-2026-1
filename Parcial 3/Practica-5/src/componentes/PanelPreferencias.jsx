import React, { useState } from 'react'

function PanelPreferencias() {
    const [tema, setTema] = useState('lightblue')
    const [nivel, setNivel] = useState('Basico')

  return (
    <div style={{
        border: '1px solid #ccc',
        padding: '16px',
        marginBottom: '20px'
    }}>
        <h2>Panel de preferencias</h2>

        <div style={{
            width: '100%',
            height: '80%',
            backgroundColor: tema,
            marginBottom: '15px'
        }}>
            <p>Nivel seleccionado: {nivel}</p>
            
            <button onClick={() => setTema('lightblue')}>
                Tema azul
            </button>

            <button onClick={()=> setTema('lightgreen')} 
                style={{marginLeft: '10px'}}>
                Tema verde
            </button>

            <button onClick={()=> setTema('lightcoral')}
                style={{marginLeft: '10px'}}>
                Tema rojo
            </button>

            <div style={{marginTop: '15px'}}>
                <button onClick={() => setNivel('Basico')}>
                    Basico
                </button>

                <button onClick={() => setNivel('Intermedio')} 
                    style={{marginLeft: '10px'}}>
                    Intermedio
                </button>

                <button onClick={() => setNivel('Avanzado')} 
                    style={{marginLeft: '10px'}}>
                    Avanzado 
                </button>
            </div>

        </div>

    </div>
  )
}

export default PanelPreferencias