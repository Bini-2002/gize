import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so `dist/index.html` works when opened directly
  // or hosted under a sub-path (common for quick submissions).
  base: './',
  plugins: [react()],
})
