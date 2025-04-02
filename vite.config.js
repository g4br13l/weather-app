import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: true,
      routeFileIgnorePrefix: '.',
      routesDirectory: 'src/modules/',
    }),
    viteReact(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      /* 'weatherAPI': 'http://api.openweathermap.org' */
      '/weatherAPI': {
        target: 'http://api.openweathermap.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weatherAPI/, '')
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
