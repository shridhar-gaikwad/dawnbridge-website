import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Your GitHub Pages site is served from /dawnbridge-website/, not from
  // the domain root, so every asset URL Vite generates needs that prefix
  // baked in. Change this if the repo name ever changes.
  base: '/dawnbridge-website/',
  plugins: [react()],
})
