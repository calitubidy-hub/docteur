const express = require('express')
const router = express.Router()
const Eleve = require('../models/Eleve')

router.post('/', async (req, res) => {
  try {
    const eleve = await Eleve.create(req.body)
    res.status(201).json({ success: true, id: eleve._id })
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ error: 'Un élève avec cet email existe déjà.' })
    res.status(500).json({ error: 'Erreur.' })
  }
})

router.get('/', async (req, res) => {
  try {
    const { statut } = req.query
    const filter = statut ? { statutPermis: statut } : {}
    const eleves = await Eleve.find(filter).sort({ dateInscription: -1 }).limit(100)
    res.json(eleves)
  } catch (err) {
    res.status(500).json({ error: 'Erreur.' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const eleve = await Eleve.findById(req.params.id)
    if (!eleve) return res.status(404).json({ error: 'Élève non trouvé.' })
    res.json(eleve)
  } catch (err) {
    res.status(500).json({ error: 'Erreur.' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const eleve = await Eleve.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!eleve) return res.status(404).json({ error: 'Élève non trouvé.' })
    res.json(eleve)
  } catch (err) {
    res.status(500).json({ error: 'Erreur.' })
  }
})

module.exports = router
