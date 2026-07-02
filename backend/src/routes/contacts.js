const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')
const { Resend } = require('resend')

const resend = process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_temporaire'
  ? new Resend(process.env.RESEND_API_KEY)
  : null

// POST /api/contacts — Créer un contact et envoyer un email
router.post('/', async (req, res) => {
  try {
    const { nom, email, telephone, message, offer, price } = req.body

    if (!nom || !email || !telephone) {
      return res.status(400).json({ error: 'Nom, email et téléphone sont requis.' })
    }

    // Sauvegarder en base
    const contact = await Contact.create({ nom, email, telephone, message, offer, price })

    // Envoyer email de notification
    if (resend) {
      await resend.emails.send({
        from: 'Docteur Permis <noreply@docteurpermi.com>',
        to: 'permisdocteur@gmail.com',
        subject: `Nouvelle demande – ${offer || 'Contact général'}`,
        html: `
          <h2>Nouvelle demande – Docteur Permis</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Formule</td><td style="padding:8px;border:1px solid #eee">${offer || '–'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Prix</td><td style="padding:8px;border:1px solid #eee">${price || '–'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Nom</td><td style="padding:8px;border:1px solid #eee">${nom}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Téléphone</td><td style="padding:8px;border:1px solid #eee">${telephone}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #eee">${message || '–'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Date</td><td style="padding:8px;border:1px solid #eee">${new Date().toLocaleString('fr-FR')}</td></tr>
          </table>
        `,
      })
    }

    res.status(201).json({ success: true, id: contact._id })
  } catch (err) {
    console.error('Erreur contact:', err)
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement.' })
  }
})

// GET /api/contacts — Lister les contacts (admin)
router.get('/', async (req, res) => {
  try {
    const { status, limit = 50, page = 1 } = req.query
    const filter = status ? { status } : {}
    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit))
    const total = await Contact.countDocuments(filter)
    res.json({ contacts, total, page: Number(page), limit: Number(limit) })
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération.' })
  }
})

// PATCH /api/contacts/:id — Mettre à jour le statut
router.patch('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    )
    if (!contact) return res.status(404).json({ error: 'Contact non trouvé.' })
    res.json(contact)
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour.' })
  }
})

module.exports = router