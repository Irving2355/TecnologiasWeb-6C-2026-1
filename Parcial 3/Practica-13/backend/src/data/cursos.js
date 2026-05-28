// Datos en memoria.
// estos datos podrian venir de MySQL o MongoDB.
export let cursos = [
  {
    id: 1,
    nombre: 'React desde cero',
    area: 'Frontend',
    nivel: 'Básico',
    duracionHoras: 24,
    descripcion: 'Curso introductorio para crear interfaces con componentes, props y estado.'
  },
  {
    id: 2,
    nombre: 'Node.js y Express',
    area: 'Backend',
    nivel: 'Intermedio',
    duracionHoras: 30,
    descripcion: 'Curso para construir APIs con rutas, middleware y controladores.'
  },
  {
    id: 3,
    nombre: 'Diseño UX/UI práctico',
    area: 'Diseño',
    nivel: 'Básico',
    duracionHoras: 18,
    descripcion: 'Curso enfocado en diseño visual, jerarquía, accesibilidad y prototipado.'
  },
  {
    id: 4,
    nombre: 'Deploy Full Stack',
    area: 'DevOps',
    nivel: 'Intermedio',
    duracionHoras: 20,
    descripcion: 'Curso para publicar frontend, backend y configurar variables de entorno.'
  }
]

export function obtenerSiguienteId() {
  if (cursos.length === 0) return 1
  return Math.max(...cursos.map((curso) => curso.id)) + 1
}
