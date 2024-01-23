const mongoose = require('mongoose')

const Schema = mongoose.Schema

const consoleSchema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    year: { type: Number },
    videogames: [
      { type: mongoose.Types.ObjectId, ref: 'videogames', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'consoles'
  }
)

const Console = mongoose.model('consoles', consoleSchema, 'consoles')
module.exports = Console
