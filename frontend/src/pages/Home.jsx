import { useState } from 'react'
import Ticker from '../components/Ticker'
import StatsBar from '../components/StatsBar'
import ContactSection from '../components/ContactSection'
import Modal from '../components/Modal'

const benefits = [
  'Code de la route délivré sous 24h',
  'Permis B — objectif 7 à 10 jours selon disponibilités',
  'Moniteurs diplômés d\'État & disponibles 7j/7',
  'Tarifs accessibles · Paiement en 4× sans frais',
  'Satisfait ou remboursé — voir nos conditions',
]

const codeOffers = [
  {
    id: 'auto',
    title: 'PACK WEB CODE AUTO',
    subtitle: 'Permis B – Boîte automatique & manuelle',
    price: '200€',
    color: '#e63946',
    badge: 'Disponible en 24h',
    badgeBg: '#ffd60a',
    badgeText: '#0d1b2a',
    features: [
      'Accès illimité à nos séries de questions',
      'Corrections détaillées & fiches mémo',
      'Examens blancs chronométrés',
    ],
    stats: [{ v: '94%', l: 'taux de réussite', s: 'Données 2024' }, { v: '24h', l: 'accès immédiat' }, { v: '∞', l: 'questions' }],
  },
  {
    id: 'moto',
    title: 'PACK WEB CODE MOTO',
    subtitle: 'Permis A / A2 – Plateau & circulation',
    price: '200€',
    color: '#f97316',
    badge: 'Disponible en 24h',
    badgeBg: '#f97316',
    badgeText: '#fff',
    features: [
      'Questions spécifiques moto & sécurité',
      'Fiches techniques & conseils plateau',
      'Examens blancs en conditions réelles',
    ],
    stats: [{ v: '92%', l: 'taux de réussite', s: 'Données 2024' }, { v: '24h', l: 'accès immédiat' }, { v: 'A2', l: 'catégorie' }],
  },
]

const formules = [
  {
    title: 'PERMIS B – CLASSIQUE',
    sub: 'Boîte automatique',
    badge: 'Objectif 7 à 10 jours*',
    price: '800',
    details: 'Code + 13h conduite + examen',
    features: ['Accès code illimité 24h', 'Moniteur dédié', 'Accompagnement exam'],
    color: '#3b82f6',
    corner: 'Le plus facile',
    dataDetails: 'Code + 13h de conduite + examen — Objectif 7 à 10 jours selon disponibilités',
  },
  {
    title: 'PERMIS B – CANDLIB',
    sub: 'Boîte automatique',
    badge: 'Objectif 10 jours*',
    price: '600',
    details: 'Code + 23h conduite + examen',
    features: ["Plus d'heures = plus de chances", 'Moniteur dédié & suivi perso', 'Accompagnement exam inclus'],
    color: '#e63946',
    corner: "L'Offre",
    glow: true,
    dataDetails: 'Code + 23h de conduite + examen — Objectif 10 jours selon disponibilités',
  },
  {
    title: 'PERMIS MOTO A2',
    sub: 'Plateau + Circulation',
    badge: 'Zéro bouchon',
    price: '600',
    details: 'Code + 20h conduite + examen',
    features: ['Formation plateau homologuée', 'Circulation en conditions réelles', 'Moniteur moto certifié'],
    color: '#f97316',
    corner: 'Moto',
    dataDetails: 'Code + 20h de conduite + examen',
  },
  {
    title: 'FORMULE ACCÉLÉRÉE',
    sub: 'La formule de votre choix',
    badge: 'Objectif 15 jours*',
    price: '+500',
    details: 'Supplément sur votre formule',
    features: ['Planning intensif sur mesure', 'Priorité sur les créneaux dispo', 'Suivi quotidien par moniteur'],
    color: '#a855f7',
    corner: 'Rapide',
    dataDetails: 'Votre formule en 15 jours — Supplément accélération — Délai indicatif selon disponibilités',
  },
]

export default function Home() {
  const [modal, setModal] = useState(null)
  const [codeIdx, setCodeIdx] = useState(0)

  const offer = codeOffers[codeIdx]

  return (
    <div>
      <Ticker />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(230,57,70,0.55) 100%), url('https://docteurpermis.fr/wp-content/uploads/2024/07/fond-header-dp2.png') center/cover no-repeat`,
        }}
      >
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#e63946] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#ffd60a] opacity-5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 px-5 py-3 rounded-full">
              <svg className="w-5 h-5 text-[#ffd60a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="font-bold text-white">Auto-école agréée</span>
              <span className="text-white/70 text-sm">· Département 92</span>
            </div>

            <img src="https://docteurpermis.fr/wp-content/uploads/2024/07/docteur-permis.png" alt="Docteur Permis" className="h-14 w-auto" />

            <div className="space-y-2">
              <p className="text-[#ffd60a] font-extrabold text-base uppercase tracking-[0.2em]">Auto-école du 92 — Méthode éprouvée</p>
              <h1 className="font-display leading-none">
                <span className="block shine-text" style={{ fontSize: 'clamp(3.2rem,7vw,6rem)' }}>CODE DE LA ROUTE</span>
                <span className="block text-[#ffd60a]" style={{ fontSize: 'clamp(2rem,4.5vw,3.8rem)' }}>DISPONIBLE EN <span className="text-white">24H</span></span>
                <span className="block text-white/30 text-3xl my-1">──────</span>
                <span className="block shine-text" style={{ fontSize: 'clamp(3.2rem,7vw,6rem)' }}>PERMIS DE CONDUIRE</span>
                <span className="block text-[#ffd60a]" style={{ fontSize: 'clamp(2rem,4.5vw,3.8rem)' }}>OBJECTIF <span className="text-white">7 À 10 JOURS</span></span>
              </h1>
              <div className="delai-note mt-3">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#ffd60a" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Délai indicatif</strong> selon disponibilités des moniteurs et des centres d'examen. Résultats basés sur nos données 2024.</span>
              </div>
            </div>

            <ul className="space-y-2 text-white/90">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#22c55e] font-black text-xl">✓</span> {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#formules" className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-red-600 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:-translate-y-1">
                TROUVER MA FORMULE
              </a>
              <a href="#offres" className="inline-flex items-center gap-2 bg-[#ffd60a] hover:bg-yellow-400 text-[#0d1b2a] font-extrabold px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:-translate-y-1">
                VOIR LES OFFRES
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="bg-white/10 border border-white/20 backdrop-blur rounded-2xl px-6 py-4 text-center">
                <div className="font-display text-4xl text-[#e63946]">600€</div>
                <div className="text-white/80 text-sm font-semibold">Le permis dès 600 €</div>
              </div>
              <div className="bg-white/10 border border-white/20 backdrop-blur rounded-2xl px-6 py-4 flex items-center gap-3">
                <img src="https://docteurpermis.fr/wp-content/uploads/2024/07/facilite-paiements.png" alt="Paiement" className="w-9 h-9 object-contain" />
                <div className="text-green-400 font-bold text-sm">Facilités de<br />financement</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <img src="https://docteurpermis.fr/wp-content/uploads/2024/07/offre-permis.png" alt="Offre permis" className="max-w-xs w-full drop-shadow-2xl" />
            <div className="flex gap-6 items-end">
              <img src="https://docteurpermis.fr/wp-content/uploads/2024/07/docteur-permis.png" alt="Docteur Permis" className="max-w-[140px] drop-shadow-xl" />
              <img src="https://docteurpermis.fr/wp-content/uploads/2024/07/voiture-docteur-permis.png" alt="Voiture" className="max-w-[180px] drop-shadow-xl" />
            </div>
            <div className="w-full bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-5 text-center space-y-3">
              <p className="text-[#ffd60a] font-extrabold uppercase tracking-widest text-xs">Pourquoi nos élèves nous choisissent</p>
              <div className="flex justify-around gap-3 text-center">
                {[
                  { v: '94%',  l: 'Taux de réussite', s: 'Données 2024' },
                  { v: '24h',  l: 'Accès code',       s: 'Accès immédiat' },
                  { v: '12k+', l: 'Élèves formés',    s: 'Depuis 2018' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {i > 0 && <div className="w-px bg-white/10 absolute" />}
                    <div className="font-display text-3xl text-white">{s.v}</div>
                    <div className="text-white/50 text-xs mt-1">{s.l}</div>
                    <span className="source-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {s.s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* OFFRES CODE */}
      <section id="offres" className="max-w-6xl mx-auto px-5 py-16">
        <p className="text-center text-[#ffd60a] font-extrabold uppercase tracking-[0.2em] text-sm mb-2">Nos offres</p>
        <h2 className="font-display text-center text-white leading-none mb-2 text-5xl">CODE DE LA ROUTE</h2>
        <p className="text-center text-[#ffd60a] font-display mb-1 text-3xl">DISPONIBLE EN 24 HEURES</p>
        <div className="h-0.5 w-20 bg-gradient-to-r from-[#e63946] to-[#ffd60a] rounded-full mx-auto mb-8" />
        <p className="text-center text-white/70 text-lg max-w-xl mx-auto mb-12">
          Révisez à votre rythme, passez l'examen rapidement.{' '}
          <strong className="text-white">Satisfait ou remboursé</strong> —{' '}
          <a href="/conditions" className="text-[#ffd60a] underline underline-offset-2">voir nos conditions</a>.
        </p>

        <div className="rounded-3xl overflow-hidden border border-white/10" style={{ background: 'linear-gradient(135deg, #1a2e44, #0d1b2a)' }}>
          <div className="p-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-5"
                style={{ background: offer.badgeBg, color: offer.badgeText }}>
                {offer.badge}
              </span>
              <h3 className="font-display text-5xl text-white mb-2">{offer.title}</h3>
              <p className="text-white/50 mb-6">{offer.subtitle}</p>
              <div className="font-display text-7xl mb-1" style={{ color: offer.color }}>{offer.price}</div>
              <p className="text-green-400 font-bold text-sm mb-6">Disponible en 24h</p>
              <ul className="space-y-3 text-white/80 text-sm mb-8">
                {offer.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
                <li className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[#ffd60a] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <strong className="text-[#ffd60a]">Satisfait ou remboursé — voir conditions</strong>
                </li>
              </ul>
              <button
                onClick={() => setModal({ title: offer.title, price: offer.price, details: `Code ${offer.id} disponible en 24h` })}
                className="font-extrabold px-10 py-4 rounded-2xl text-lg transition-all hover:-translate-y-1 shadow-lg text-white"
                style={{ background: offer.color }}
              >
                COMMENCER LE CODE
              </button>
            </div>
            <div className="hidden md:flex flex-col items-center gap-6">
              <div className="flex gap-6 text-center">
                {offer.stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="font-display text-4xl" style={{ color: offer.color }}>{s.v}</div>
                    <div className="text-white/50 text-xs">{s.l}</div>
                    {s.s && <span className="source-badge">{s.s}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-t border-white/10">
            {codeOffers.map((o, i) => (
              <button
                key={i}
                onClick={() => setCodeIdx(i)}
                className={`flex-1 py-3 font-bold text-sm transition-colors ${
                  i === codeIdx ? 'text-white bg-white/10' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {o.id === 'auto' ? '🚗 Code Auto' : '🏍 Code Moto'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section id="formules" className="max-w-7xl mx-auto px-5 py-16">
        <p className="text-center text-[#ffd60a] font-extrabold uppercase tracking-[0.2em] text-sm mb-2">Formules permis</p>
        <h2 className="font-display text-center text-white leading-none mb-2 text-5xl">PERMIS DE CONDUIRE</h2>
        <p className="text-center text-[#ffd60a] font-display mb-1 text-3xl">OBJECTIF 7 À 10 JOURS*</p>
        <div className="h-0.5 w-20 bg-gradient-to-r from-[#e63946] to-[#ffd60a] rounded-full mx-auto mb-6" />
        <p className="text-center text-white/70 text-lg max-w-2xl mx-auto mb-4">
          Choisissez la formule qui vous correspond. Nos moniteurs certifiés vous accompagnent du premier cours jusqu'à l'examen.
        </p>
        <div className="max-w-2xl mx-auto mb-10">
          <div className="delai-note">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#ffd60a" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>* Délais indicatifs selon disponibilités des moniteurs et des centres d'examen. <strong>Résultats variables selon le profil de chaque élève.</strong></span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {formules.map((f, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-2"
              style={{
                background: `linear-gradient(to bottom, ${f.color}20, #0d1b2a)`,
                border: `1px solid ${f.color}50`,
                boxShadow: f.glow ? `0 0 0 2px ${f.color}, 0 8px 32px ${f.color}50` : undefined,
              }}
              onClick={() => setModal({ title: f.title, price: `${f.price} €`, details: f.dataDetails })}
            >
              <div
                className="absolute top-0 right-0 px-4 py-1.5 text-xs font-black uppercase tracking-wider rounded-tr-3xl rounded-bl-2xl text-white"
                style={{ background: f.color }}
              >
                {f.corner}
              </div>
              <h3 className="font-extrabold text-white text-lg mb-1 mt-4">{f.title}</h3>
              <p className="font-bold text-sm mb-1" style={{ color: f.color }}>{f.sub}</p>
              <div className="inline-block text-xs font-extrabold px-3 py-1 rounded-full mb-4 text-green-400 bg-green-500/20">{f.badge}</div>
              <div className="font-display text-6xl text-white mb-1">{f.price}<span className="text-3xl">€</span></div>
              <p className="text-white/50 text-sm mb-5">{f.details}</p>
              <ul className="space-y-2 text-white/70 text-sm mb-6">
                {f.features.map((feat, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                className="w-full font-extrabold py-3 rounded-2xl transition-all hover:-translate-y-1 text-white"
                style={{ background: f.color }}
              >
                {f.title === 'FORMULE ACCÉLÉRÉE' ? 'NOUS CONTACTER' : 'CHOISIR'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="delai-note">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#ffd60a" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>* Délais indicatifs basés sur nos données 2024, selon disponibilités. Résultats variables selon le profil de chaque élève. Toutes nos formules incluent l'accompagnement complet jusqu'à l'obtention du permis.</span>
          </div>
        </div>
      </section>

      <ContactSection />

      {modal && <Modal offer={modal} onClose={() => setModal(null)} />}
    </div>
  )
}
