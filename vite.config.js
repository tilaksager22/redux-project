import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: "./",  // 👈 Fixes incorrect asset paths on Netlify
>>>>>>> d033001 (third)
  plugins: [react()],
})
