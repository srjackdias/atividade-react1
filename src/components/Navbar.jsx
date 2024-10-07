import { Link } from "react-router-dom"
import './NavBar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/fofoca">Fofoca</Link>
        <Link to="/senhas">senhas</Link>

    </nav>
  )
}

export default Navbar