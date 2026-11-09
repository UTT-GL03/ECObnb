import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function Stars({ rating }) {
  const full = Math.round(rating)
  return (
    <span className="stars">
      {'★'.repeat(full)}{'☆'.repeat(5 - full)}
      <span className="rating-num">{rating.toFixed(1)}</span>
    </span>
  )
}

function TransitBadge({ meters }) {
  const cls = meters <= 300 ? 'transit-green' : meters <= 700 ? 'transit-orange' : 'transit-red'
  return <span className={`transit-badge ${cls}`}>🚌 {meters} m</span>
}

function ListingCard({ id, city, type, title, host, price, capacity, rating, transit_distance }) {
  return (
    <article className="listing-card">
      <header>
        <span className="tag">{type}</span>
        <span className="city-label">📍 {city}</span>
      </header>
      <Link to={`/${id}`}><h3>{title}</h3></Link>
      <p className="capacity">👤 {host} · {capacity} pers.</p>
      <footer>
        <span className="price">{price} €<small>/nuit</small></span>
        <Stars rating={rating} />
        <TransitBadge meters={transit_distance} />
      </footer>
    </article>
  )
}

function Listings() {
  const [listings, setListings] = useState([])
  const [city, setCity] = useState('Toutes')

  useEffect(() => {
    fetch('/sample_data.json')
      .then(r => r.json())
      .then(data => setListings(data.listings))
  }, [])

  const cities = ['Toutes', ...new Set(listings.map(l => l.city)).values()]
  const filtered = city === 'Toutes' ? listings : listings.filter(l => l.city === city)

  return (
    <main className="container">
      <h2>Logements disponibles <small>({filtered.length} résultats)</small></h2>
      <div className="city-filters">
        {cities.map(c => (
          <button key={c} className={city === c ? 'active' : ''} onClick={() => setCity(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="listings-grid">
        {filtered.map(l => <ListingCard key={l.id} {...l} />)}
      </div>
    </main>
  )
}

export default Listings
