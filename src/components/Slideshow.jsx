
import { useState } from 'react'
import './Slideshow.css'

function Slideshow({ pictures }) {
  const [photoActuelle, setPhotoActuelle] = useState(0)

  const photoSuivante = () => {
    setPhotoActuelle((index) => (index + 1) % pictures.length)
  }

  const photoPrecedente = () => {
    setPhotoActuelle((index) => (index - 1 + pictures.length) % pictures.length)
  }

  return (
    <div className="galerie">
      <img
        src={pictures[photoActuelle]}
        alt={`Photo ${photoActuelle + 1} du logement`}
      />

      {pictures.length > 1 && (
        <>
          <button
            className="fleche gauche"
            onClick={photoPrecedente}
            aria-label="Photo précédente"
          >
            ❮
          </button>

          <button
            className="fleche droite"
            onClick={photoSuivante}
            aria-label="Photo suivante"
          >
            ❯
          </button>

          <span className="compteur" key={photoActuelle}>
  {`${photoActuelle + 1}/${pictures.length}`}
</span>
        </>
      )}
    </div>
  )
}

export default Slideshow
