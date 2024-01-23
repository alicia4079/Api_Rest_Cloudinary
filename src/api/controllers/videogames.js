const { deleteFile } = require('../../utils/deleteFile')
const Videogames = require('../models/Videogames')

const getVideogames = async (req, res, next) => {
  try {
    const videogames = await Videogames.find()
    return res.status(200).json(videogames)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postVideogames = async (req, res, next) => {
  try {
    const newVideogames = new Videogames(req.body)
    if (req.file) {
      newVideogames.caratula = req.file.path
    }
    const videogamesSaved = await newVideogames.save()
    return res.status(201).json(videogamesSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putVideogames = async (req, res, next) => {
  try {
    const { id } = req.params
    const newVideogames = new Videogames(req.body)
    newVideogames._id = id
    const videogamesUpdated = await Videogames.findByIdAndUpdate(
      id,
      newVideogames,
      {
        new: true
      }
    )
    return res.status(200).json(videogamesUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteVideogames = async (req, res, next) => {
  try {
    const { id } = req.params
    const videogamesDeleted = await Videogames.findByIdAndDelete(id)
    deleteFile(videogamesDeleted.caratula)
    return res.status(200).json({
      mensaje: 'Elemento eliminado',
      videogamesDeleted
    })
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getVideogames,
  postVideogames,
  putVideogames,
  deleteVideogames
}
