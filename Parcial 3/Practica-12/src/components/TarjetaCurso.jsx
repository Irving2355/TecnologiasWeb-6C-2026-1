import { memo } from 'react'

// memo evita que esta tarjeta se vuelva a renderizar
// si sus props no cambiaron.
function TarjetaCurso({ curso, onInscribir }) {
  console.log('Render TarjetaCurso:', curso.id)

  return (
    <article className="tarjeta">
      <span className="etiqueta">{curso.area}</span>

      <h2>{curso.nombre}</h2>

      <p>
        <strong>Nivel:</strong> {curso.nivel}
      </p>

      <p>
        <strong>Duración:</strong> {curso.duracionHoras} horas
      </p>

      <p>
        <strong>Inscrito:</strong> {curso.inscrito ? 'Sí' : 'No'}
      </p>

      <button onClick={() => onInscribir(curso.id)}>
        Cambiar inscripción
      </button>
    </article>
  )
}

export default memo(TarjetaCurso)
