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

      <NavLink to="/cursos" className={obtenerClase}>
        Cursos
      </NavLink>

      <NavLink to="/acerca" className={obtenerClase}>
        Acerca de
      </NavLink>
    </nav>
  )
}

export default Navbar
