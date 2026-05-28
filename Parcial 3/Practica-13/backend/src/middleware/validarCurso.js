export function validarCurso(req, res, next) {
  const { nombre, area, nivel, duracionHoras, descripcion } = req.body

  if (!nombre || !area || !nivel || !descripcion) {
    return res.status(400).json({
      mensaje: 'nombre, area, nivel y descripcion son obligatorios'
    })
  }

  if (!Number(duracionHoras) || Number(duracionHoras) <= 0) {
    return res.status(400).json({
      mensaje: 'duracionHoras debe ser un número mayor que cero'
    })
  }

  next()
}
