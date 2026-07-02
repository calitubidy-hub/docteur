import { useState } from 'react'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'

export default function Modal({ offer, onClose }) {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!offer) return null

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('/api/contacts', {
        ...form,
        offer: offer.title,
        price: offer.price,
      })
      const WA_NUMBER = '33757750783'
      const message =
        `*NOUVELLE DEMANDE – DOCTEUR PERMIS*\n\n` +
        `Formule : ${offer.title}\nPrix : ${offer.price}\n\n` +
        `Nom : ${form.nom}\nEmail : ${form.email}\nTél : ${form.telephone}\n\n` +
        `Message : ${form.message || 'Aucun message'}\n\n` +
        new Date().toLocaleString('fr-FR')
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
      setSent(true)
      toast.success('Demande envoyée !')
    } catch {
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-[#0d1b2a] border border-white/10 rounded-3xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-white/40 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="font-display text-3xl text-white text-center mb-2">DEMANDE D'INFO</h2>
        <div className="h-0.5 w-20 bg-gradient-to-r from-[#e63946] to-[#ffd60a] rounded-full mx-auto mb-6" />

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center mb-6">
          <div className="font-extrabold text-white text-lg">{offer.title}</div>
          <div className="font-display text-4xl text-[#e63946] mt-1">{offer.price}</div>
          {offer.details && <div className="text-white/50 text-sm mt-1">{offer.details}</div>}
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { type: 'text',  name: 'nom',       label: 'Nom complet *',    placeholder: 'Votre nom' },
              { type: 'email', name: 'email',      label: 'Adresse email *',  placeholder: 'votre@email.com' },
              { type: 'tel',   name: 'telephone',  label: 'Téléphone *',      placeholder: '06 00 00 00 00' },
            ].map(f => (
              <div key={f.name}>
                <label className="block text-white/80 font-semibold text-sm mb-1">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#e63946] focus:outline-none transition"
                />
              </div>
            ))}
            <div>
              <label className="block text-white/80 font-semibold text-sm mb-1">Message (optionnel)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Des questions particulières ?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#e63946] focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#e63946] hover:bg-red-600 disabled:opacity-50 text-white font-extrabold py-4 rounded-2xl text-lg transition-all hover:-translate-y-1 shadow-lg"
            >
              {loading ? 'Envoi...' : 'ENVOYER MA DEMANDE'}
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-3xl text-white">DEMANDE ENVOYÉE</h3>
            <p className="text-white/70">Notre équipe vous recontacte sous <strong className="text-white">1 heure</strong> (lun–sam, 8h–20h).</p>
            <button
              onClick={onClose}
              className="bg-[#e63946] hover:bg-red-600 text-white font-extrabold px-8 py-3 rounded-2xl transition"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
