import React from 'react'

import {
    obtenerCurso,
    obtnerProfesor,
    obtnerMateria
} from '../serivces/fakeService'

function AsyncDemo() {
    const caragarCursosConThen = () =>{
        obtenerCurso().then((resultado) =>{
            console.log('Curso recibido con then ', resultado)
            alert(
                'Curso: ' + resultado.nombre +
                '\nDuracion: '+resultado.duracion+
                '\nModalidad: '+resultado.modalidad
            )
        }).catch((error) =>{
            console.log('Error: ', error)
        })
    }

    const cargarProfesorConAwait = async () =>{
        try{
            const resultado = await obtnerProfesor()
            console.log('Profesor recibido')
            alert(
                'Profesor: '+ resultado.nombre +
                '\nArea: ' + resultado.area 
            )
        } catch(error){
            console.log('Error: ', error)
        }
    }

    const caragarMateriaConAwait = async () =>{
        try{
            const resultado = await obtnerMateria()
            console.log('Materia recibida')
            alert(
                'Materia: '+ resultado.nombre +
                '\nSemestre: ' + resultado.area 
            )
        }catch(error){
            console.log('Error: ',error)
        }
    }
  return (
    <div>
        <h2>Promesas y async/await</h2>
        <p>Presiona los botones para obtener los datos</p>

        <button onClick={caragarCursosConThen}>
            Caragar Cursos
        </button>

        <button onClick={cargarProfesorConAwait}>
            Caragar Profesor
        </button>

        <button onClick={caragarMateriaConAwait}>
            Cargar Materia
        </button>
    </div>
  )
}


export default AsyncDemo