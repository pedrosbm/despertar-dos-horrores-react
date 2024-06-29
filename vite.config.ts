import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSassDts from "vite-plugin-sass-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSassDts()
  ],
  css:{
    modules:{
      scopeBehaviour: 'local'
    }
  }
})
