const mongoose = require('mongoose')

const videogamesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    caratula: { type: String, required: true },
    year: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ['action', 'sports', 'adventure', 'shooter', 'life']
    }
  },
  {
    timestamps: true,
    collection: 'videogames'
  }
)

const Videogames = mongoose.model('videogames', videogamesSchema, 'videogames')
module.exports = Videogames
