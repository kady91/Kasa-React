
import { useState } from 'react'
import './Collapse.css'

// Composant réutilisable pour afficher un contenu déroulant
function Collapse({ title, children }) {
  // Gère l'état ouvert ou fermé du Collapse
  const [ouvert, setOuvert] = useState(false)

  return (
    <div className={`accordeon ${ouvert ? 'ouvert' : ''}`}>

      {/* Bouton permettant d'ouvrir ou de fermer le Collapse */}
      <button
        className="accordeon-titre"
        onClick={() => setOuvert(!ouvert)}
        aria-expanded={ouvert}
      >
        {/* Affiche le titre du Collapse */}
        {title}

        {/* Flèche qui change de direction selon l'état du Collapse */}
        <span className="chevron menu-chevron"></span>
      </button>

      {/* Conteneur du contenu avec animation verticale */}
      <div className="accordeon-contenu">
        <div className="accordeon-interieur">
          {/* Affiche le contenu transmis au composant */}
          {children}
        </div>
      </div>

    </div>
  )
}

export default Collapse
