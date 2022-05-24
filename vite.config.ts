/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['patronum/babel-preset'],
        plugins: [['effector/babel-plugin', { reactSsr: true }]],
      },
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    deps: {
      fallbackCJS: true,
    },
  },
})
