const upload = require('../../middlewares/file')
const {
  getVideogames,
  postVideogames,
  putVideogames,
  deleteVideogames
} = require('../controllers/videogames')

const videogamesRoutes = require('express').Router()

videogamesRoutes.get('/', getVideogames),
  videogamesRoutes.post('/', upload.single('caratula'), postVideogames),
  videogamesRoutes.put('/:id', putVideogames)
videogamesRoutes.delete('/:id', deleteVideogames)

module.exports = videogamesRoutes
