import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['chart.js', 'react-chartjs-2']
  },
  server: {
    hmr: {
      overlay: true  // optional: set to false to disable red overlay
    }
  }
})
