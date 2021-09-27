import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'react-chartjs',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
      plugins: [
        typescript({
          tsconfig: './tsconfig.json',
        }),
      ],
    },
  },
})
