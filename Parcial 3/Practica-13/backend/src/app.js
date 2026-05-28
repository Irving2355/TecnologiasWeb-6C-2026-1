import express from 'express'
import cors from 'cors'
import cursosRoutes from './routes/cursos.routes.js'
import { logger } from './middleware/logger.js'

const app = express()

// express.json permite que el backend lea JSON enviado por el frontend.
// Sin esto, req.body llegaría como undefined en POST y PUT.
app.use(express.json())

// CORS permite que React, ejecutándose en otro puerto o dominio,
// pueda consumir la API sin ser bloqueado por el navegador.
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173'
  })
)

// Middleware propio para observar en consola cada petición recibida.
app.use(logger)

app.get('/api/health', (req, res) => {
  res.json({ ok: true, mensaje: 'API funcionando correctamente' })
})

app.use('/api/cursos', cursosRoutes)

// Middleware final para rutas no encontradas dentro del backend.
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada en la API' })
})

export default app
