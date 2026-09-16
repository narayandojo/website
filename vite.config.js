import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    writeBundle(options) {
      const outputDirectory = options.dir ?? resolve(process.cwd(), 'dist')
      copyFileSync(
        resolve(outputDirectory, 'index.html'),
        resolve(outputDirectory, '404.html'),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
})
