import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ref: https://vitejs.dev/guide/static-deploy.html#github-pages
  base: '/react-chartjs/',
})
