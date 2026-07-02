// PermisB.jsx
import ContactSection from '../components/ContactSection'
import { useState } from 'react'
import Modal from '../components/Modal'

const formules = [
  { title: 'CLASSIQUE – Manuelle', hours: '20H', type: 'MANUELLE', price: 'À partir de 600€',
    features: ['Démarches administratives', 'Livre de code Pack Web (12 mois)', 'Accès à la salle de code (12 mois)', '20 heures de conduite manuelle', 'Présentation à l\'examen'] },
  { title: 'CLASSIQUE – Automatique', hours: '13H', type: 'AUTOMATIQUE', price: 'À partir de 600€',
    features: ['Démarches administratives', 'Livre de code Pack Web (12 mois)', 'Accès à la salle de code (12 mois)', '13 heures de conduite automatique', 'Présentation à l\'examen'] },
]

export default function PermisB() {
  const [modal, setModal] = useState(null)
  return (
    <div style={{ background: '#f9f9f9', color: '#333', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg,#0055A4,#EF4135)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16 }}>OBTENEZ VOTRE PERMIS DE CONDUIRE</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: 700, margin: '0 auto', opacity: .85 }}>L'auto-école de confiance qui vous accompagne vers la réussite</p>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ background: '#f0f4fa', borderLeft: '3px solid #0055A4', borderRadius: '0 8px 8px 0', padding: '12px 16px', fontSize: 13, color: '#555', marginBottom: 40 }}>
          ℹ️ <strong style={{ color: '#0055A4' }}>Délais indicatifs</strong> selon disponibilités des moniteurs et des centres d'examen. Résultats variables selon le profil de chaque élève.
        </div>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#0055A4', marginBottom: 40 }}>Nos Formules Permis B</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 30 }}>
          {formules.map((f, i) => (
            <div key={i} onClick={() => setModal({ title: f.title, price: f.price, details: f.type })}
              style={{ border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden', cursor: 'pointer', transition: 'transform .2s', boxShadow: '0 4px 6px rgba(0,0,0,.1)' }}>
              <div style={{ background: '#0055A4', color: 'white', padding: 16, textAlign: 'center' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontSize: '2rem', fontWeight: 800 }}>{f.hours}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{f.type}</div>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ background: '#f0f4fa', borderLeft: '3px solid #0055A4', padding: '8px 12px', fontSize: 12, color: '#555', marginBottom: 16, borderRadius: '0 6px 6px 0' }}>
                  ℹ️ Délai indicatif selon disponibilités
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {f.features.map((feat, j) => (
                    <li key={j} style={{ padding: '8px 0', borderBottom: '1px solid #eee', paddingLeft: 20, position: 'relative', fontSize: 14 }}>
                      <span style={{ position: 'absolute', left: 0, color: '#0055A4', fontWeight: 700 }}>✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 16, fontWeight: 800, color: '#0055A4', fontSize: '1.3rem' }}>{f.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal && <Modal offer={modal} onClose={() => setModal(null)} />}
    </div>
  )
}
