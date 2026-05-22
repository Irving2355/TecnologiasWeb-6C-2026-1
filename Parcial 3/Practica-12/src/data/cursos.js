const areas = ['Frontend', 'Backend', 'Diseño', 'Datos', 'DevOps']
const niveles = ['Básico', 'Intermedio', 'Avanzado']

// Generamos varios cursos para que el filtrado y las estadísticas
// tengan más trabajo que hacer.
export const cursos = Array.from({ length: 80 }, (_, index) => {
  const id = index + 1
  const area = areas[index % areas.length]
  const nivel = niveles[index % niveles.length]

  return {
    id,
    nombre: `Curso ${id} de ${area}`,
    area,
    nivel,
    duracionHoras: 10 + (index % 8) * 5,
    inscrito: index % 4 === 0
  }
})
