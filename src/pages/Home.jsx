import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import './Home.css'

function Home() {
  // Stocke la liste des logements récupérés depuis l'API
  const [logements, setLogements] = useState([])

  // Récupère les logements au chargement de la page
  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error('Erreur API :', error))
  }, [])

  return (
    <main>
      <Banner />

      {/* Affiche les logements récupérés depuis l'API */}
      <section className="logements">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </main>
  )
}

export default Home