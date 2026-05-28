import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' ayuda cuando se sube el build a servicios estáticos o GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './'
})
