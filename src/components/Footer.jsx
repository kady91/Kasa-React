
import './Footer.css'
import logo from '../assets/logo.svg'

// Composant Footer : pied de page commun aux pages de Kasa
function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer-logo" />
      <p>© 2026 Kasa. Tous droits réservés.</p>
    </footer>
  )
}

export default Footer
