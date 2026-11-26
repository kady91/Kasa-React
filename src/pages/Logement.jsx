
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import './Logement.css'
import NotFound from './NotFound'

function Logement() {
  const { id } = useParams()

  const [resultat, setResultat] = useState({
    id: null,
    logement: null,
  })

  // Récupération des données du logement
  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => {
        const logementTrouve = data.find((item) => item.id === id)

        setResultat({
          id,
          logement: logementTrouve || null,
        })
      })
      .catch((error) => {
        console.error('Erreur API :', error)
        setResultat({ id, logement: null })
      })
  }, [id])

  const chargement = resultat.id !== id
  const logement = resultat.logement

  if (chargement) return <p>Chargement...</p>
  if (!logement) return <NotFound />

  return (
    <main className="logement-detail">

      {/* Galerie photos */}
      <Slideshow
        key={logement.id}
        pictures={logement.pictures}
      />

      {/* Informations du logement */}
      <div className="logement-infos">
        <div className="logement-titre">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          {/* Tags */}
          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Hôte et note */}
        <div className="hote">
          <div className="hote-identite">
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <div className="etoiles">
            {'★'.repeat(Number(logement.rating))}
            {'☆'.repeat(5 - Number(logement.rating))}
          </div>
        </div>
      </div>

      {/* Menus déroulants */}
      <div className="logement-accordeons">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </div>

    </main>
  )
}

export default Logement
