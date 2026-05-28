import { useState } from 'react'

const estadoInicial = {
  nombre: '',
  area: 'Frontend',
  nivel: 'Básico',
  duracionHoras: '',
  descripcion: ''
}

function CursoForm({ onSubmit, enviando }) {
  const [formulario, setFormulario] = useState(estadoInicial)
  const [errores, setErrores] = useState({})

  const actualizarCampo = (campo, valor) => {
    setFormulario({ ...formulario, [campo]: valor })
  }

  const validar = () => {
    const nuevosErrores = {}

    if (!formulario.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.'
    if (!formulario.descripcion.trim()) nuevosErrores.descripcion = 'La descripción es obligatoria.'
    if (!Number(formulario.duracionHoras) || Number(formulario.duracionHoras) <= 0) {
      nuevosErrores.duracionHoras = 'La duración debe ser mayor que cero.'
    }

    return nuevosErrores
  }

  const manejarEnvio = (e) => {
    e.preventDefault()

    const nuevosErrores = validar()
    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length === 0) {
      onSubmit({
        ...formulario,
        duracionHoras: Number(formulario.duracionHoras)
      })
    }
  }

  return (
    <form className="form-card" onSubmit={manejarEnvio}>
      <div className="field">
        <label htmlFor="nombre">Nombre del curso</label>
        <input
          id="nombre"
          value={formulario.nombre}
          onChange={(e) => actualizarCampo('nombre', e.target.value)}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>

      <div className="field">
        <label htmlFor="area">Área</label>
        <select
          id="area"
          value={formulario.area}
          onChange={(e) => actualizarCampo('area', e.target.value)}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Diseño">Diseño</option>
          <option value="DevOps">DevOps</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="nivel">Nivel</label>
        <select
          id="nivel"
          value={formulario.nivel}
          onChange={(e) => actualizarCampo('nivel', e.target.value)}
        >
          <option value="Básico">Básico</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="duracion">Duración en horas</label>
        <input
          id="duracion"
          type="number"
          value={formulario.duracionHoras}
          onChange={(e) => actualizarCampo('duracionHoras', e.target.value)}
        />
        {errores.duracionHoras && <span className="error">{errores.duracionHoras}</span>}
      </div>

      <div className="field">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          value={formulario.descripcion}
          onChange={(e) => actualizarCampo('descripcion', e.target.value)}
        />
        {errores.descripcion && <span className="error">{errores.descripcion}</span>}
      </div>

      <button type="submit" disabled={enviando}>
        {enviando ? 'Guardando...' : 'Guardar curso'}
      </button>
    </form>
  )
}

export default CursoForm
