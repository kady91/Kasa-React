
import './Banner.css'

// Composant Banner : affiche une bannière avec une image et un texte facultatif
function Banner({ image, texte = 'Chez vous, partout et ailleurs' }) {
  return (
    <section
      className="banner"
      // Si une image est transmise, elle remplace celle du CSS
      // Sinon, on conserve l'image définie dans Banner.css
     // Applique un voile noir léger sur l'image personnalisée
style={
  image
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${image})`,
      }
    : {}
}
    >
      {/* Affiche le texte uniquement s'il est renseigné */}
      {texte && <h1>{texte}</h1>}
    </section>
  )
}

export default Banner
