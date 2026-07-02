const stats = [
  { value: '12 000+', label: 'élèves formés',       source: 'Depuis 2018' },
  { value: '94%',     label: 'taux de réussite',    source: 'Données 2024' },
  { value: '24h',     label: 'délai code de route', source: 'Accès immédiat' },
  { value: '7j/7',    label: 'moniteurs disponibles', source: 'Diplômés d\'État' },
]

export default function StatsBar() {
  return (
    <div className="bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="font-display text-4xl text-[#ffd60a]">{s.value}</div>
            <div className="text-white/60 text-sm font-semibold mt-1">{s.label}</div>
            <span className="source-badge mt-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {s.source}
            </span>
          </div>
        ))}
      </div>
      <div className="transparence-bar">
        ✓ Chiffres issus de nos données internes 2024 · Taux de réussite calculé sur l'ensemble de nos élèves ayant passé l'examen · Moniteurs diplômés d'État
      </div>
    </div>
  )
}
