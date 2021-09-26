import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'react-chartjs',
    },
    rollupOptions: {
      external: ['react'],
    },
  },
})
