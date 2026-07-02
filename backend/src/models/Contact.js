// Contact.js
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  nom:       { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true, lowercase: true },
  telephone: { type: String, required: true, trim: true },
  message:   { type: String, trim: true, default: '' },
  offer:     { type: String, trim: true },
  price:     { type: String, trim: true },
  status:    { type: String, enum: ['nouveau', 'en_cours', 'traité'], default: 'nouveau' },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Contact', contactSchema)
