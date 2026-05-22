import { NavLink } from 'react-router'

function Navbar() {
  const obtenerClase = ({ isActive }) => {
    return isActive ? 'activo' : ''
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className={obtenerClase}>
        Inicio
      </NavLink>

      <NavLink to="/catalogo" className={obtenerClase}>
        Catálogo
      </NavLink>

      <NavLink to="/estadisticas" className={obtenerClase}>
        Estadísticas
      </NavLink>
    </nav>
  )
}

export default Navbar
