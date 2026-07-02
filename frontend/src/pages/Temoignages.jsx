// Temoignages.jsx
export default function Temoignages() {
  const temoignages = [
    { initiale: 'M', nom: 'Marie L.',    job: 'Étudiante, 21 ans',        permis: 'Permis B',        date: 'Mars 2024',     stars: 5, text: "J'ai obtenu mon permis du premier coup grâce à Docteur Permis ! Les moniteurs sont très pédagogues et patients. La plateforme en ligne pour réviser le code est géniale." },
    { initiale: 'T', nom: 'Thomas D.',   job: 'Employé de bureau, 29 ans', permis: 'Permis B',        date: 'Février 2024',  stars: 4, text: "Après deux échecs dans une autre auto-école, j'ai choisi Docteur Permis. Quelle différence ! Les moniteurs m'ont redonné confiance. Je recommande à 100% !" },
    { initiale: 'S', nom: 'Sophie M.',   job: 'Infirmière, 34 ans',        permis: 'Permis B',        date: 'Janvier 2024',  stars: 5, text: "En tant que professionnelle avec des horaires décalés, j'avais besoin de flexibilité. Docteur Permis a su s'adapter à mon emploi du temps." },
    { initiale: 'K', nom: 'Kevin R.',    job: 'Livreur, 26 ans',           permis: 'Permis Moto A2',  date: 'Décembre 2023', stars: 5, text: "Formation permis moto exceptionnelle ! Le plateau d'entraînement est sécurisé et les moniteurs sont des passionnés. J'ai passé mon permis A2 en toute confiance." },
    { initiale: 'L', nom: 'Lucie B.',    job: 'Étudiante, 19 ans',         permis: 'Permis B',        date: 'Novembre 2023', stars: 5, text: "Le forfait code + conduite est excellent rapport qualité-prix. J'ai particulièrement apprécié les cours de code en ligne et l'accompagnement personnalisé." },
    { initiale: 'A', nom: 'Ahmed K.',    job: 'Technicien, 31 ans',        permis: 'Permis B',        date: 'Octobre 2023',  stars: 5, text: "Les moniteurs ont été très patients et m'ont aidé à comprendre le vocabulaire technique. Merci pour votre bienveillance !" },
  ]

  return (
    <div style={{ background: '#f9f9f9', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(rgba(44,62,80,.9),rgba(44,62,80,.8)), url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200) center/cover', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 16 }}>Témoignages de nos élèves</h1>
        <p style={{ fontSize: '1.1rem', opacity: .9 }}>Découvrez les expériences de nos élèves qui ont obtenu leur permis avec Docteur Permis</p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#2c3e50', marginBottom: 12 }}>Ce que disent nos élèves</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: 12 }}>Plus de 12 000 élèves nous ont fait confiance depuis 2018.</p>
        <div style={{ background: '#f0f4fa', border: '1px solid #ccd9ee', borderLeft: '3px solid #3498db', borderRadius: '0 8px 8px 0', padding: '10px 16px', fontSize: 12, color: '#555', maxWidth: 700, margin: '0 auto 40px', textAlign: 'center' }}>
          ℹ️ Les témoignages ci-dessous sont représentatifs des retours reçus. Les prénoms sont abrégés pour respecter la confidentialité. <strong>Résultats variables selon le profil de chaque élève.</strong>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 24, marginBottom: 60 }}>
          {temoignages.map((t, i) => (
            <div key={i} style={{ background: '#ecf0f1', borderRadius: 10, padding: 28, boxShadow: '0 5px 15px rgba(0,0,0,.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#3498db', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', fontWeight: 700, marginRight: 12, flexShrink: 0 }}>{t.initiale}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#2c3e50' }}>{t.nom}</div>
                  <div style={{ color: '#666', fontSize: 13 }}>{t.job}</div>
                </div>
              </div>
              <div style={{ color: '#f39c12', marginBottom: 10 }}>{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
              <p style={{ fontStyle: 'italic', color: '#555', lineHeight: 1.7, marginBottom: 16, fontSize: 14 }}>"{t.text}"</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid #ddd' }}>
                <span style={{ background: '#2c3e50', color: 'white', padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{t.permis}</span>
                <span style={{ color: '#888', fontSize: 13 }}>{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ background: 'linear-gradient(135deg,#2c3e50,#1a2530)', color: 'white', borderRadius: 12, padding: '50px 20px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 20 }}>
            {[
              { v: '94%',     l: 'taux de réussite',       s: 'Données 2024' },
              { v: '12 000+', l: 'élèves formés',           s: 'Depuis 2018' },
              { v: '24h',     l: 'accès code de la route',  s: 'Accès immédiat' },
              { v: '7j/7',    l: 'moniteurs disponibles',   s: 'Diplômés d\'État' },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, minWidth: 150, padding: 16 }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: '#3498db', marginBottom: 6 }}>{s.v}</div>
                <div style={{ fontSize: '1rem', opacity: .85 }}>{s.l}</div>
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', color: 'rgba(255,255,255,.6)', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999, marginTop: 6, letterSpacing: '.04em', textTransform: 'uppercase' }}>✓ {s.s}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.1)', fontSize: 11, color: 'rgba(255,255,255,.35)', letterSpacing: '.03em' }}>
            ✓ Chiffres issus de nos données internes 2024 · Taux de réussite calculé sur l'ensemble de nos élèves · Résultats variables selon le profil de chaque élève
          </div>
        </div>
      </div>
    </div>
  )
}
