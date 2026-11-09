import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Listings from './Listings'
import Listing from './Listing'

function App() {
  return (
    <BrowserRouter>
      <header className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <strong>🏠 LogiVert</strong>
              </Link>
            </li>
          </ul>
          <ul>
            <li><small>Location écoresponsable</small></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/:id" element={<Listing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
