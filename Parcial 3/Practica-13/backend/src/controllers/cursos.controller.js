import { cursos, obtenerSiguienteId } from '../data/cursos.js'

export function listarCursos(req, res) {
  res.json(cursos)
}

export function obtenerCurso(req, res) {
  const id = Number(req.params.id)
  const curso = cursos.find((item) => item.id === id)

  if (!curso) {
    return res.status(404).json({ mensaje: 'Curso no encontrado' })
  }

  res.json(curso)
}

export function crearCurso(req, res) {
  const nuevoCurso = {
    id: obtenerSiguienteId(),
    nombre: req.body.nombre,
    area: req.body.area,
    nivel: req.body.nivel,
    duracionHoras: Number(req.body.duracionHoras),
    descripcion: req.body.descripcion
  }

  cursos.push(nuevoCurso)

  res.status(201).json({
    mensaje: 'Curso creado correctamente',
    curso: nuevoCurso
  })
}

export function actualizarCurso(req, res) {
  const id = Number(req.params.id)
  const indice = cursos.findIndex((item) => item.id === id)

  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Curso no encontrado' })
  }

  cursos[indice] = {
    id,
    nombre: req.body.nombre,
    area: req.body.area,
    nivel: req.body.nivel,
    duracionHoras: Number(req.body.duracionHoras),
    descripcion: req.body.descripcion
  }

  res.json({
    mensaje: 'Curso actualizado correctamente',
    curso: cursos[indice]
  })
}

export function eliminarCurso(req, res) {
  const id = Number(req.params.id)
  const indice = cursos.findIndex((item) => item.id === id)

  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Curso no encontrado' })
  }

  const eliminado = cursos.splice(indice, 1)[0]

  res.json({
    mensaje: 'Curso eliminado correctamente',
    curso: eliminado
  })
}
