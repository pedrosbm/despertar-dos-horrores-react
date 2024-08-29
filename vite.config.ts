import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSassDts from "vite-plugin-sass-dts"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSassDts()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css:{
    modules:{
      scopeBehaviour: 'local'
    }
  }
})
