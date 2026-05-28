import { NavLink } from 'react-router'

function Navbar() {
  const clase = ({ isActive }) => (isActive ? 'activo' : '')

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">Academia Web</div>

        <nav className="links">
          <NavLink to="/" className={clase}>Inicio</NavLink>
          <NavLink to="/cursos" className={clase}>Cursos</NavLink>
          <NavLink to="/nuevo" className={clase}>Nuevo curso</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
