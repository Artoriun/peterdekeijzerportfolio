import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'peter-portfolio.loca.lt',
      '.loca.lt', // Allow all localtunnel subdomains
      '.trycloudflare.com' // Allow all cloudflare tunnel domains
    ],
    hmr: {
      clientPort: 443 // Use HTTPS port for tunnel compatibility
    }
  },
  preview: {
    allowedHosts: [
      '.loca.lt', // Allow all localtunnel subdomains
      '.trycloudflare.com' // Allow all cloudflare tunnel domains
    ]
  }
})
