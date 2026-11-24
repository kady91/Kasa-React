
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Logement from './pages/Logement'
import NotFound from './pages/NotFound'

import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
