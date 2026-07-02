const channels = [
  {
    href: 'tel:+33757750783',
    className: 'cc-call',
    iconColor: '#38bdf8',
    borderColor: 'rgba(56,189,248,.3)',
    bgColor: 'rgba(56,189,248,.1)',
    title: 'Appel téléphonique',
    sub: 'Lun–Sam · 8h–20h',
    info: '+33 7 57 75 07 83',
    infoStyle: { background: 'rgba(56,189,248,.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,.3)' },
    cta: 'Appeler maintenant',
    ctaColor: '#38bdf8',
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    href: 'mailto:permisdocteur@gmail.com',
    className: 'cc-email',
    iconColor: '#22c55e',
    borderColor: 'rgba(34,197,94,.3)',
    bgColor: 'rgba(34,197,94,.1)',
    title: 'Email',
    sub: 'Réponse sous 1h · Lun–Sam 8h–20h',
    info: 'permisdocteur@gmail.com',
    infoStyle: { background: 'rgba(34,197,94,.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,.3)' },
    cta: 'Envoyer un email',
    ctaColor: '#22c55e',
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/33757750783',
    target: '_blank',
    className: 'cc-wa',
    iconColor: '#25D366',
    borderColor: 'rgba(37,211,102,.35)',
    bgColor: 'rgba(37,211,102,.1)',
    title: 'WhatsApp',
    sub: 'Chat instantané · 7j/7',
    info: 'Message direct',
    infoStyle: { background: 'rgba(37,211,102,.1)', color: '#25D366', border: '1px solid rgba(37,211,102,.3)' },
    cta: 'Écrire sur WhatsApp',
    ctaColor: '#25D366',
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#e63946] opacity-5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#ffd60a] opacity-5 blur-[100px]" />
      </div>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-10">
          <p className="text-[#ffd60a] font-extrabold uppercase tracking-[0.25em] text-sm mb-3">On est là pour vous</p>
          <h2 className="font-display text-white leading-none mb-4 text-5xl md:text-6xl">CONTACTEZ-NOUS</h2>
          <div className="h-1 w-28 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(90deg,#e63946,#ffd60a,#e63946)' }} />
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-5">Choisissez le canal qui vous convient le mieux.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="horaires-badge">
              <span className="dot-live" />
              Lundi – Samedi · 8h00 à 20h00
            </div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white/50 text-sm font-semibold px-4 py-2 rounded-full">
              Réponse sous 1h pendant les horaires d'ouverture
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.target}
              rel={c.target ? 'noopener noreferrer' : undefined}
              className="relative overflow-hidden rounded-3xl cursor-pointer flex flex-col items-center text-center gap-5 p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, ${c.bgColor.replace('0.1', '0.15')}, #0d1b2a)`,
                border: `1px solid ${c.borderColor}`,
              }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: c.bgColor, border: `1px solid ${c.borderColor}`, color: c.iconColor }}
              >
                {c.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-white text-xl mb-1">{c.title}</h3>
                <p className="text-white/50 text-sm mb-2">{c.sub}</p>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-bold" style={c.infoStyle}>
                  {c.info}
                </span>
              </div>
              <div className="mt-auto w-full">
                <div className="h-px mb-4" style={{ background: `linear-gradient(to right, transparent, ${c.iconColor}40, transparent)` }} />
                <span className="font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2" style={{ color: c.iconColor }}>
                  {c.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 rounded-3xl p-8 text-center border border-white/10"
          style={{ background: 'linear-gradient(to right, rgba(230,57,70,.2), rgba(255,214,10,.1), rgba(230,57,70,.2))' }}
        >
          <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-2">Temps de réponse moyen</p>
          <div className="font-display text-6xl text-[#ffd60a] mb-4">MOINS DE 1H</div>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <div className="horaires-badge"><span className="dot-live" />Lundi – Samedi · 8h00 à 20h00</div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/40 text-xs font-semibold px-4 py-2 rounded-full">
              Hors horaires : réponse le prochain jour ouvré
            </div>
          </div>
          <p className="text-white/50 max-w-lg mx-auto text-sm">
            Le délai d'1h s'applique pendant les horaires d'ouverture.
          </p>
        </div>
      </div>
    </section>
  )
}
