const items = [
  "Code de la route en 24h",
  "Permis de conduire rapide",
  "Paiement en 4x sans frais",
  "Réponse sous 1h · Lun–Sam 8h–20h",
  "Moniteurs diplômés d'État",
  "Auto-école du 92",
]

const doubled = [...items, ...items]

export default function Ticker() {
  return (
    <div className="bg-[#e63946] overflow-hidden py-2">
      <div
        className="inline-flex gap-12 text-white font-bold text-sm tracking-widest uppercase"
        style={{
          animation: 'ticker 18s linear infinite',
          whiteSpace: 'nowrap',
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="whitespace-nowrap">— {item}</span>
        ))}
      </div>
    </div>
  )
}
