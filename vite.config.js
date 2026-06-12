import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/auth': 'http://localhost:8080',
      '/games': 'http://localhost:8080',
      '/profile': 'http://localhost:8080',
      '/lobbies': 'http://localhost:8080',
      '/matchmaking': 'http://localhost:8080',
      '/leaderboard': 'http://localhost:8080',
      '/swagger': 'http://localhost:8080',
    }
  }
})
