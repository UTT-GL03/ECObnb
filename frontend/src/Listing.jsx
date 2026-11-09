import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')

function Stars({ rating, max = 5 }) {
  const full = Math.round(rating)
  return (
    <span className="stars">
      {'★'.repeat(full)}{'☆'.repeat(max - full)}
    </span>
  )
}

function Services({ services }) {
  if (!services) return <p><em>Services non renseignés.</em></p>
  const labels = {
    wifi:            { label: 'Wi-Fi',       icon: '📶' },
    kitchen:         { label: 'Cuisine',      icon: '🍳' },
    washing_machine: { label: 'Lave-linge',   icon: '🫧' },
    heating:         { label: 'Chauffage',    icon: '🔥' },
    bike_storage:    { label: 'Local vélos',  icon: '🚲' },
  }
  return (
    <div className="services-grid">
      {Object.entries(labels).map(([key, { label, icon }]) => (
        <div key={key} className={`service-item ${services[key] ? 'service-ok' : 'service-no'}`}>
          <span>{icon}</span>
          <span>{label}</span>
          <span style={{ marginLeft: 'auto' }}>{services[key] ? '✓' : '✗'}</span>
        </div>
      ))}
    </div>
  )
}

function Reviews({ reviews }) {
  if (!reviews) return <p><em>Aucun avis pour l'instant.</em></p>
  return (
    <div>
      {reviews.map((r, i) => (
        <article key={i} className="review-card">
          <header>
            <strong>{r.author}</strong>
            <Stars rating={r.rating} />
            <time style={{ fontSize: '0.8rem', color: 'var(--pico-muted-color)' }}>
              {dayjs(r.date).format('D MMM YYYY')}
            </time>
          </header>
          <p>{r.comment}</p>
        </article>
      ))}
    </div>
  )
}

function Listing() {
  const { id } = useParams()
  const [listing, setListing] = useState(null)

  useEffect(() => {
    fetch('/sample_data.json')
      .then(r => r.json())
      .then(data => setListing(data.listings.find(l => l.id === Number(id))))
  }, [id])

  if (listing === null) {
    return <main className="container"><p aria-busy="true">Chargement…</p></main>
  }

  if (!listing) {
    return (
      <main className="container">
        <p>Logement introuvable. <Link to="/">Retour à la liste</Link></p>
      </main>
    )
  }

  const { city, type, title, host, price, capacity, rating, transit_distance, description, services, reviews } = listing
  const transitClass = transit_distance <= 300 ? 'transit-green' : transit_distance <= 700 ? 'transit-orange' : 'transit-red'

  return (
    <main className="container">
      <p className="breadcrumb"><Link to="/">← Retour aux résultats</Link></p>

      <article>
        <div className="detail-header">
          <div className="detail-title">
            <span className="tag">{type}</span>
            <h2>{title}</h2>
            <div className="info-row">
              <span className="info-pill">📍 {city}</span>
              <span className="info-pill">👤 Hôte : {host}</span>
              <span className="info-pill">🏠 {capacity} pers. max.</span>
              <span className={`transit-badge ${transitClass}`}>🚌 {transit_distance} m</span>
            </div>
            <div className="info-row">
              <Stars rating={rating} />
              <span className="rating-num">{rating.toFixed(1)} / 5</span>
            </div>
          </div>
          <div className="detail-price-box">
            <div className="big-price">{price} €</div>
            <small>par nuit</small>
          </div>
        </div>

        {description.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}

        <section>
          <h3>Services</h3>
          <Services services={services} />
        </section>

        <section>
          <h3>Avis des voyageurs ({reviews ? reviews.length : 0})</h3>
          <Reviews reviews={reviews} />
        </section>
      </article>
    </main>
  )
}

export default Listing
