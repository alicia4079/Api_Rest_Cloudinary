const upload = require('../../middlewares/file')
const {
  getConsole,
  postConsole,
  putConsole,
  deleteConsole
} = require('../controllers/console')

const consoleRoutes = require('express').Router()

consoleRoutes.get('/', getConsole),
  consoleRoutes.post('/', upload.single('logo'), postConsole),
  consoleRoutes.put('/:id', putConsole)
consoleRoutes.delete('/:id', deleteConsole)

module.exports = consoleRoutes
