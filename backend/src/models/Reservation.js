// Reservation.js
const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  nom:       { type: String, required: true, trim: true },
  prenom:    { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true, lowercase: true },
  telephone: { type: String, required: true, trim: true },
  formule:   { type: String, required: true },
  date:      { type: Date },
  message:   { type: String, trim: true, default: '' },
  status:    { type: String, enum: ['en_attente', 'confirmée', 'annulée'], default: 'en_attente' },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Reservation', reservationSchema)
