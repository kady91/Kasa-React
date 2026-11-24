
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Header.css'

// Composant Header : en-tête commun aux pages de Kasa
function Header() {
  return (
    <header className="header">
      {/* Logo et lien vers la page d'accueil */}
      <Link to="/" aria-label="Accueil Kasa">
        <img src={logo} alt="Kasa" className="logo" />
      </Link>

      {/* Navigation principale du site */}
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
