import { Link, useParams } from 'react-router'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import data from './sample_data.json'

dayjs.locale('fr')

function Services({ services }) {
  if (!services) return <p><em>Services non renseignés.</em></p>
  const labels = {
    wifi: 'Wi-Fi',
    kitchen: 'Cuisine',
    washing_machine: 'Lave-linge',
    heating: 'Chauffage',
    bike_storage: 'Local vélos',
  }
  return (
    <ul>
      {Object.entries(labels).map(([key, label]) => (
        <li key={key}>{services[key] ? '✅' : '❌'} {label}</li>
      ))}
    </ul>
  )
}

function Reviews({ reviews }) {
  if (!reviews) return <p><em>Aucun avis pour l'instant.</em></p>
  return (
    <div>
      {reviews.map((r, i) => (
        <article key={i}>
          <header>
            <strong>{r.author}</strong>
            <time> · {dayjs(r.date).format('D MMM YYYY')}</time>
            <span className="rating"> · ★ {r.rating}/5</span>
          </header>
          <p>{r.comment}</p>
        </article>
      ))}
    </div>
  )
}

function Listing() {
  const { id } = useParams()
  const listing = data.listings.find(l => l.id === Number(id))

  if (!listing) {
    return (
      <main className="container">
        <p>Logement introuvable. <Link to="/">Retour à la liste</Link></p>
      </main>
    )
  }

  const { city, type, title, host, price, capacity, rating, transit_distance, description, services, reviews } = listing

  return (
    <main className="container">
      <nav aria-label="breadcrumb">
        <Link to="/">← Retour aux résultats</Link>
      </nav>

      <article>
        <header>
          <span className="tag">{type}</span>
          <span className="city"> {city}</span>
          <h2>{title}</h2>
          <p>
            Hôte : <strong>{host}</strong> ·
            Jusqu'à <strong>{capacity} personnes</strong> ·
            <strong> {price} €/nuit</strong>
          </p>
          <p>
            <span className="rating">★ {rating.toFixed(1)}/5</span>
            {' · '}
            <span>🚌 Transport en commun à <strong>{transit_distance} m</strong></span>
          </p>
        </header>

        {description.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}

        <section>
          <h3>Services</h3>
          <Services services={services} />
        </section>

        <section>
          <h3>Avis des voyageurs</h3>
          <Reviews reviews={reviews} />
        </section>
      </article>
    </main>
  )
}

export default Listing
