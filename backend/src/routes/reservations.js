// reservations.js
const express = require('express')
const router = express.Router()
const Reservation = require('../models/Reservation')

router.post('/', async (req, res) => {
  try {
    const { nom, prenom, email, telephone, formule, date, message } = req.body
    if (!nom || !prenom || !email || !telephone || !formule) {
      return res.status(400).json({ error: 'Champs requis manquants.' })
    }
    const reservation = await Reservation.create({ nom, prenom, email, telephone, formule, date, message })
    res.status(201).json({ success: true, id: reservation._id })
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la réservation.' })
  }
})

router.get('/', async (req, res) => {
  try {
    const { status } = req.query
    const filter = status ? { status } : {}
    const reservations = await Reservation.find(filter).sort({ createdAt: -1 }).limit(100)
    res.json(reservations)
  } catch (err) {
    res.status(500).json({ error: 'Erreur.' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true })
    if (!reservation) return res.status(404).json({ error: 'Réservation non trouvée.' })
    res.json(reservation)
  } catch (err) {
    res.status(500).json({ error: 'Erreur.' })
  }
})

module.exports = router
