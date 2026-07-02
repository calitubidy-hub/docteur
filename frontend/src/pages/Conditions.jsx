export default function Conditions() {
  const articles = [
    {
      num: 1, title: 'Informations légales',
      content: `Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations proposées par Docteur Permis, auto-école agréée du département des Hauts-de-Seine (92).\n\nEmail : permisdocteur@gmail.com\nTéléphone : +33 7 57 75 07 83\nDisponible : Lundi – Samedi, 8h00 à 20h00`
    },
    {
      num: 2, title: 'Tarifs et prestations',
      content: `Tous les prix sont exprimés en euros TTC. Pack Web Code Auto/Moto : 200 € · Pack Complet : 350 €\nPermis B Classique : à partir de 600 € · Permis Moto A2 : 600 €\nFormule Accélérée : supplément +500 € · Conduite accompagnée : 1 150 €`
    },
    {
      num: 3, title: 'Modalités de paiement',
      content: `Paiement intégral à la commande ou en 4 fois sans frais (sous conditions, acompte de 25% requis). Modes acceptés : virement bancaire, carte bancaire, espèces.`
    },
    {
      num: 4, title: 'Conditions de remboursement',
      content: `Notre engagement "Satisfait ou remboursé" couvre : les heures de conduite non effectuées, le Pack Web Code non activé (dans les 48h suivant l'achat), les frais non engagés auprès des organismes.\n\nNe sont pas remboursables : les heures de conduite effectuées, le Pack activé depuis plus de 48h, les frais d'examen déjà réglés, les rdv annulés moins de 48h avant.\n\nPour demander un remboursement : envoyer un email à permisdocteur@gmail.com avec votre nom, la prestation concernée et le motif. Délai de traitement : 14 jours ouvrés.`
    },
    {
      num: 5, title: 'Délais de formation',
      content: `Les délais communiqués sont des délais indicatifs basés sur nos statistiques internes 2024. Ils ne constituent pas une garantie contractuelle.\n\nExemples indicatifs :\n– Code de la route : accès sous 24h après validation\n– Permis B : objectif 7 à 10 jours selon disponibilités\n– Formule Accélérée : objectif 15 jours selon disponibilités\n\nLes délais dépendent des disponibilités des moniteurs, des centres d'examen, et du profil de l'élève.`
    },
    {
      num: 6, title: 'Accès aux services en ligne',
      content: `Les accès à la plateforme de révision sont transmis par email sous 24h ouvrées après validation du paiement. Durée d'accès : 12 mois. Accès personnel et non cessible.`
    },
    {
      num: 7, title: 'Obligations de l\'élève',
      content: `L'élève s'engage à fournir les pièces requises, se présenter aux séances aux horaires fixés, prévenir l'auto-école au minimum 48h à l'avance en cas d'absence, et respecter le règlement intérieur.`
    },
    {
      num: 8, title: 'Annulation et report',
      content: `Plus de 48h avant : report sans frais.\nEntre 24h et 48h : report possible une fois.\nMoins de 24h ou absence : séance due et non remboursable.\n\nEn cas d'annulation de notre fait, la séance est reportée ou remboursée.`
    },
    {
      num: 9, title: 'Responsabilités',
      content: `Docteur Permis ne peut garantir le succès à l'examen. Les résultats varient selon le profil et l'implication de chaque élève. L'échec à l'examen ne constitue pas un motif de remboursement.`
    },
    {
      num: 10, title: 'Contact et réclamations',
      content: `Téléphone : +33 7 57 75 07 83 — Lun–Sam, 8h–20h\nEmail : permisdocteur@gmail.com\nWhatsApp : wa.me/33757750783`
    },
  ]

  return (
    <div style={{ background: '#f5f7fa', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg,#0055A4,#003d7a)', color: 'white', padding: '56px 24px 48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 10 }}>Conditions Générales de Vente</h1>
        <p style={{ opacity: .75, fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>Modalités de vente, de remboursement et d'accès à nos services de formation à la conduite.</p>
        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 999, fontSize: 12, fontWeight: 700, padding: '4px 14px', marginTop: 14 }}>Mise à jour : Janvier 2025</span>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 80px' }}>
        {articles.map(a => (
          <div key={a.num} id={`article${a.num}`} style={{ background: 'white', border: '1px solid #dce3ef', borderRadius: 12, padding: '32px 36px', marginBottom: 20 }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0055A4', marginBottom: 18, paddingBottom: 14, borderBottom: '2px solid #f5f7fa', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: '#0055A4', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, flexShrink: 0 }}>{a.num}</span>
              {a.title}
            </h2>
            {a.content.split('\n').map((line, i) => (
              <p key={i} style={{ fontSize: 15, color: '#444', marginBottom: 8, lineHeight: 1.7 }}>{line || <br />}</p>
            ))}
          </div>
        ))}

        <div style={{ background: '#0055A4', borderRadius: 12, padding: '32px 36px', textAlign: 'center', color: 'white', marginTop: 32 }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 8 }}>Une question sur nos conditions ?</h2>
          <p style={{ opacity: .75, marginBottom: 20, fontSize: 15 }}>Notre équipe répond sous 1h du lundi au samedi de 8h à 20h.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href="tel:+33757750783" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: 'white', padding: '10px 20px', borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>📞 +33 7 57 75 07 83</a>
            <a href="mailto:permisdocteur@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: 'white', padding: '10px 20px', borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>✉️ permisdocteur@gmail.com</a>
            <a href="https://wa.me/33757750783" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: 'white', padding: '10px 20px', borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>💬 WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  )
}
