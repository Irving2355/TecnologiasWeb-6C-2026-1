import React from 'react'

function AsyncDemo() {
  return (
    <div>AsyncDemo</div>
  )
}

function obtenerMensaje(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve('Hola desde una promesa')
        }, 2000) 
    })
}

obtenerMensaje().then(resultado =>{
    console.log(resultado)
}).catch((error) =>{
    console.log(error)
})

export default AsyncDemo