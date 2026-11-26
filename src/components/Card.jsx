
import { Link } from 'react-router-dom'
import './Card.css'

// Affiche une carte de logement cliquable
function Card({ logement }) {
  return (
    // Redirige vers la page du logement sélectionné
    <Link to={`/logement/${logement.id}`} className="card-link">
      <article className="card">

        {/* Affiche la première image du logement comme image de couverture */}
        <img
          src={logement.pictures[0]}
          alt={logement.title}
          className="card-image"
        />

        {/* Affiche le titre du logement sur l'image */}
        <h2>{logement.title}</h2>

      </article>
    </Link>
  )
}

export default Card
