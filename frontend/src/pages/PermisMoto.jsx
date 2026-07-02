// PermisMoto.jsx
import { useState } from 'react'
import Modal from '../components/Modal'

export default function PermisMoto() {
  const [modal, setModal] = useState(null)
  return (
    <div style={{ background: '#f9f9f9', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url(https://images.unsplash.com/photo-1558980664-1db506751c6c?w=1200) center/cover', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#ff3333', marginBottom: 16 }}>PERMIS MOTO A2 dès 600€</h1>
        <h2 style={{ fontSize: '1.8rem' }}>Marre des bouchons ? Découvrez le permis Moto</h2>
        <div style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 8, padding: '10px 20px', marginTop: 20, display: 'inline-block', fontSize: 13 }}>
          ℹ️ Délai indicatif selon disponibilités des moniteurs et des centres d'examen
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 20px' }}>
        <div
          onClick={() => setModal({ title: 'PERMIS MOTO A2 – CLASSIQUE', price: '600 €', details: 'Code + 20h conduite + examen' })}
          style={{ background: 'white', borderRadius: 8, padding: 30, maxWidth: 400, cursor: 'pointer', boxShadow: '0 5px 15px rgba(0,0,0,.1)', border: '1px solid #eee' }}>
          <h3 style={{ color: '#cc0000', fontSize: '1.8rem', marginBottom: 16 }}>CLASSIQUE</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Démarches administratives', 'Livre de code Pack Web (12 mois)', 'Accès à la salle de code (6 mois)', '20 heures de conduite (12 mois)', 'Fourniture kit pédagogique'].map((f, i) => (
              <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontSize: 14 }}>✓ {f}</li>
            ))}
          </ul>
          <div style={{ fontWeight: 800, color: '#cc0000', fontSize: '2rem', marginTop: 16 }}>600€</div>
          <button style={{ marginTop: 12, background: '#cc0000', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 5, fontWeight: 700, cursor: 'pointer', width: '100%' }}>
            Choisir cette formule
          </button>
        </div>
      </div>
      {modal && <Modal offer={modal} onClose={() => setModal(null)} />}
    </div>
  )
}
