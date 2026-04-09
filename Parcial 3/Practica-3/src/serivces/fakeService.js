export function obtenerCurso(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                nombre: 'React',
                duracion: '4 semanas',
                modalidad: 'en linea'
            })
        }, 2000)
    })
}

export function obtnerProfesor(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({
                nombre: 'María José',
                area: 'Tecnologias web'
            })
        },1500)
    })
}

export function obtnerMateria(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({
                nombre: 'Ecuaciones diferenciales',
                area: '4to'
            })
        },1800)
    })
}