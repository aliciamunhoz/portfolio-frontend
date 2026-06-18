import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy: tudo que começar com "/api" vai para o backend (porta 4000).
    // Assim o navegador "pensa" que fala com o mesmo endereço e não dá
    // erro de CORS no desenvolvimento. Mesmo padrão do bookAPI.
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
})
