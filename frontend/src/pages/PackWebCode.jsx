import { useState } from 'react'
import Modal from '../components/Modal'

const packs = [
  { title: 'PACK WEB CODE AUTO', price: '200 €', color: '#e30613',
    features: ['Accès illimité 24h/24', 'Plateforme Ediser officielle', 'Séries d\'examens réelles', 'Examens blancs illimités', 'Statistiques de progression', 'Support technique inclus'] },
  { title: 'PACK WEB CODE MOTO', price: '200 €', color: '#0055a4',
    features: ['Accès illimité 24h/24', 'Plateforme Ediser officielle', 'Séries spécifiques moto', 'Examens blancs illimités', 'Statistiques de progression', 'Support technique inclus'] },
  { title: 'PACK WEB COMPLET', price: '350 €', color: '#e30613',
    features: ['Accès aux packs Auto + Moto', 'Plateforme Ediser officielle', 'Économisez 50€ vs achat séparé', 'Examens blancs illimités', 'Statistiques de progression', 'Support technique inclus'] },
]

export default function PackWebCode() {
  const [modal, setModal] = useState(null)
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ background: '#0055a4', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12 }}>Révisez votre code de la route en ligne</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, opacity: .85, marginBottom: 16 }}>Accès activé sous 24h après validation de votre commande</h2>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffd60a' }}>200 €</div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ background: '#f0f4fa', border: '1px solid #ccd9ee', borderRadius: 8, padding: '10px 16px', fontSize: 12, color: '#555', marginBottom: 40, textAlign: 'center' }}>
          ✓ Accès activé sous 24h · Plateforme Ediser officielle · Questions officielles de l'examen
        </div>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#0055a4', marginBottom: 40 }}>Nos Packs Web Code</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 30, justifyContent: 'center' }}>
          {packs.map((p, i) => (
            <div key={i} onClick={() => setModal({ title: p.title, price: p.price, details: 'Accès sous 24h' })}
              style={{ background: 'white', borderRadius: 8, padding: 30, width: 300, borderTop: `5px solid ${p.color}`, cursor: 'pointer', boxShadow: '0 5px 15px rgba(0,0,0,.1)' }}>
              <h3 style={{ color: p.color, fontSize: '1.5rem', marginBottom: 16 }}>{p.title}</h3>
              <div style={{ fontWeight: 800, fontSize: '2rem', color: p.color, marginBottom: 8 }}>{p.price}</div>
              <div style={{ display: 'inline-block', background: 'rgba(255,214,10,.15)', border: '1px solid rgba(255,214,10,.4)', color: '#b07a00', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999, marginBottom: 16 }}>
                ✓ Accès sous 24h
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 20 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ padding: '7px 0', borderBottom: '1px solid #eee', fontSize: 13, paddingLeft: 18, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: p.color, fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button style={{ width: '100%', background: p.color, color: 'white', border: 'none', padding: '12px', borderRadius: 5, fontWeight: 700, cursor: 'pointer' }}>
                Choisir ce pack
              </button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 30, background: '#f0f4fa', borderLeft: '3px solid #0055a4', borderRadius: '0 8px 8px 0', padding: '12px 16px', fontSize: 13, color: '#555', maxWidth: 700, margin: '30px auto 0' }}>
          ℹ️ Votre accès est activé sous <strong>24h</strong> après validation. Durée d'accès : 12 mois. Résultats à l'examen variables selon le temps de révision de chaque élève.
        </div>
      </div>
      {modal && <Modal offer={modal} onClose={() => setModal(null)} />}
    </div>
  )
}
