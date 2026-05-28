import { Router } from 'express'
import {
  actualizarCurso,
  crearCurso,
  eliminarCurso,
  listarCursos,
  obtenerCurso
} from '../controllers/cursos.controller.js'
import { validarCurso } from '../middleware/validarCurso.js'

const router = Router()

router.get('/', listarCursos)
router.get('/:id', obtenerCurso)
router.post('/', validarCurso, crearCurso)
router.put('/:id', validarCurso, actualizarCurso)
router.delete('/:id', eliminarCurso)

export default router
