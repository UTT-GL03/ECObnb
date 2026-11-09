import { Link } from 'react-router'
import data from './sample_data.json'

function TransitBadge({ meters }) {
  const cls = meters <= 300 ? 'transit-green' : meters <= 700 ? 'transit-orange' : 'transit-red'
  return <span className={`transit-badge ${cls}`}>🚌 {meters} m</span>
}

function ListingCard({ id, city, type, title, host, price, capacity, rating, transit_distance }) {
  return (
    <article>
      <header>
        <span className="tag">{type}</span>
        <span className="city">{city}</span>
      </header>
      <Link to={`/${id}`}><h3>{title}</h3></Link>
      <p className="meta">
        Hôte : {host} · {capacity} pers. · <strong>{price} €/nuit</strong>
      </p>
      <footer>
        <span className="rating">★ {rating.toFixed(1)}</span>
        <TransitBadge meters={transit_distance} />
      </footer>
    </article>
  )
}

function Listings() {
  const { listings } = data
  return (
    <main className="container">
      <h2>Logements disponibles <small>({listings.length} résultats)</small></h2>
      <div className="listings-grid">
        {listings.map(l => <ListingCard key={l.id} {...l} />)}
      </div>
    </main>
  )
}

export default Listings
