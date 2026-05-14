import { NavLink } from "react-router"


function NavBar() {
  return (
    <nav>
        <NavLink to="/">
        Inicio 
        </NavLink>
        <NavLink to="/publicaciones">
        Publicaciones
        </NavLink>
        <NavLink to="/acerca">
        Acerca de
        </NavLink>
    </nav>
  )
}

export default NavBar