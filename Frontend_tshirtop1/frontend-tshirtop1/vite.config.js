import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    preview: {
      allowedHosts: ['tshirtop-1262192193.us-east-1.elb.amazonaws.com'], // Agregar el host aquí
    },
  },
})
