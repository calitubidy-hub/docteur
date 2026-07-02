const mongoose = require('mongoose')

const eleveSchema = new mongoose.Schema({
  nom:       { type: String, required: true, trim: true },
  prenom:    { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, trim: true, lowercase: true },
  telephone: { type: String, trim: true },
  dateNaissance: { type: Date },
  formule:   { type: String },
  heuresEffectuees: { type: Number, default: 0 },
  heuresTotal:      { type: Number, default: 0 },
  dateInscription:  { type: Date, default: Date.now },
  statutPermis: {
    type: String,
    enum: ['en_formation', 'examen_code', 'examen_conduite', 'obtenu', 'echoué'],
    default: 'en_formation'
  },
  notes: { type: String, default: '' },
})

module.exports = mongoose.model('Eleve', eleveSchema)
