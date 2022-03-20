import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://psmyrdek.github.io/vue-game-of-life/',
  plugins: [vue()]
})
