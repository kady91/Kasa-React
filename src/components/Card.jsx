import { Link } from 'react-router-dom'
import './Card.css'

// Affiche une carte de logement cliquable
function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card-link">
      <article className="card">
        <h2>{logement.title}</h2>
      </article>
    </Link>
  )
}

export default Card