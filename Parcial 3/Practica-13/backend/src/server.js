import dotenv from 'dotenv'
import app from './app.js'

dotenv.config()

// Render, Railway y otros servicios suelen asignar el puerto mediante process.env.PORT.
// Localmente usamos 4000 para que sea fácil recordar la URL de la API.
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`API ejecutándose en http://localhost:${PORT}/api`)
})
