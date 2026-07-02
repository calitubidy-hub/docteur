import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import PermisB from './pages/PermisB'
import PermisMoto from './pages/PermisMoto'
import PackWebCode from './pages/PackWebCode'
import Temoignages from './pages/Temoignages'
import Conditions from './pages/Conditions'

export default function App() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#0d1b2a' }}>
      <Header />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/permis-b"       element={<PermisB />} />
        <Route path="/permis-moto"    element={<PermisMoto />} />
        <Route path="/pack-web-code"  element={<PackWebCode />} />
        <Route path="/temoignages"    element={<Temoignages />} />
        <Route path="/conditions"     element={<Conditions />} />
      </Routes>
    </div>
  )
}
