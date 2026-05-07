
function ResumenRegistro({datos}) {
  return (
    <div className="card shadow-sm mt-4">
        <div className="card-body">
            <h2 className="h4 mb-3">Registro</h2>
            <p>Nombre: {datos.nombre}</p>
            <p>Carrera: {datos.carrera}</p>
            <p>Correo: {datos.correo}</p>
            <p>Semestre: {datos.semestre}</p>
        </div>
    </div>
  )
}

export default ResumenRegistro