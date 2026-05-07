import { useState } from "react"

function FormularioRegistro({onRegistroCorrecto}) {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [carrera, setCarrera] = useState('')
    const [semestre, setSemestre] = useState('')
    const [aceptaTerminos, setTerminos] = useState(false)

    const [errores, setErrores] = useState({})

    const validarFormulario = ()=>{
        const nuevosErrores = {}

        if(!nombre.trim()){
            nuevosErrores.nombre = 'El nombre es obligatorio'
        }

        if(!carrera.trim()){
            nuevosErrores.carrera = 'La carrera es obligatoria'
        }

        if(!correo.trim()){
            nuevosErrores.correo = 'Correo de favor XD'
        }else if (!correo.includes('@')){
            nuevosErrores.correo = 'Completa la direccion de correo'
        }

        if(!semestre){
            nuevosErrores.semestre = 'Debes seleccionar semestre'
        }

        if(!aceptaTerminos){
            nuevosErrores.aceptaTerminos = 'Debes de aceptar los terminos'
        }

        return nuevosErrores 
    }

    const manejarEnvio = (e) =>{
        e.preventDefault()

        const nuevosErrores = validarFormulario()
        setErrores(nuevosErrores)

        if(Object.keys(nuevosErrores).length === 0){
            onRegistroCorrecto({
                nombre,
                correo,
                carrera,
                semestre
            })
        }
    }

  return (
    <form onSubmit={manejarEnvio} className="card shadow-sm">
        <div className="card-body">
            <h2 className="h4 mb-3">Formulario de registro</h2>

            <div className="mb-3">
                <label className="from-label">Nombre</label>
                <input type="text" 
                className={`form-control ${errores.nombre ? 'is-invalid': ''}`}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)
                }
                />
                {errores.nombre && (
                    <div className="invalid-feedback">{errores.nombre}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="from-label">Carrera</label>
                <input type="text" 
                className={`form-control ${errores.carrera ? 'is-invalid': ''}`}
                value={carrera}
                onChange={(e) => setCarrera(e.target.value)}
                />
                {errores.carrera && (
                    <div className="invalid-feedback">{errores.carrera}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                {errores.correo && (
                    <div className="invalid-feedback">{errores.correo}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label">Semestre</label>
                <select
                className={`form-select ${errores.semestre ? 'is-invalid' : ''}`}
                value={semestre}
                onChange={(e)=> setSemestre(e.target.value)}>
                    <option value="">Selecciona</option>
                    <option value="1ro">1ro</option>
                    <option value="2ro">2ro</option>
                    <option value="3ro">3ro</option>
                    <option value="4ro">4ro</option>
                    <option value="5ro">5ro</option>
                    <option value="6ro">6ro</option>
                    <option value="7ro">7ro</option>
                </select>
                {errores.semestre && (
                    <div className="invalid-feedback">{errores.semestre}</div>
                )}
            </div>

            <div className="form-check mb-3">
                <input type="checkbox"
                    className={`form-check-input ${errores.aceptaTerminos ? 'is-invalid' : ''}`}

                    checked= {aceptaTerminos}
                    onChange={(e)=> setTerminos(e.target.checked)}
                    id="terminos"
                />
                <label className="form-check-label" htmlFor="terminos">Aceptar terminos</label>
                {errores.aceptaTerminos && (
                    <div className="text-danger small mt-1">
                        {errores.aceptaTerminos}
                    </div>
                )}
            </div>

            <button type="submit" className="btn btn-primary">Registrar</button>
        </div>
    </form>
  )
}

export default FormularioRegistro