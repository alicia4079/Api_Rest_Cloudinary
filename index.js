require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const consoleRoutes = require('./src/api/routes/console.routes')
const videogamesRoutes = require('./src/api/routes/videogames.routes')
const usersRoutes = require('./src/api/routes/user.routes')
const cloudinary = require('cloudinary').v2

connectDB()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const PORT = 3000
const server = express()

server.use(express.json())

server.use('/api/v1/consoles', consoleRoutes)
server.use('/api/v1/videogames', videogamesRoutes)
server.use('/api/v1/users', usersRoutes)

server.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  res.status(404).json({ error: 'Ruta no encontrada😡' })
})

server.listen(PORT, () => {
  console.log(`Server running 😊 in http://localhost:${PORT}`)
})
