import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    https: false,
    host: '127.0.0.1',
    port: 3333
  }
}

export default config
