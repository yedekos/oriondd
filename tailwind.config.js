/** @type {import('tailwindcss').Config} */
import logicalPlugin from 'tailwindcss-logical'
import customPlugin from './src/@core/tailwind/plugin'

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  corePlugins: {
    preflight: false
  },
  important: '#__next',
  plugins: [logicalPlugin, customPlugin],
  theme: {
    extend: {
      colors: {
        customPurple: 'rgb(47,51,90)' // Özel renk eklendi
      }
    }
  }
}

export default config
