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

      {/* En esta practica este enlace mostrara el contador global. */}
      <NavLink to="/favoritos" className={obtenerClase}>
        Favoritos
      </NavLink>
    </nav>
  )
}

export default Navbar
