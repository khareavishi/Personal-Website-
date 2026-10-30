/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#040508',
          cockpitBg: '#060A12',
          navy: '#081C3A',
          navyLight: '#0d2750',
          surface: '#0B1322',
          surfaceLight: '#142036',
          parchment: '#F5F2EB',
          parchmentMuted: '#C5C1B6',
          gold: '#D4AF37',
          goldHover: '#E5C158',
          goldMuted: 'rgba(212, 175, 55, 0.18)',
          goldBorder: 'rgba(212, 175, 55, 0.35)',
          tacticalCyan: '#00F0FF',
          slate: '#8B9BB4',
          slateDark: '#4A5B75',
          borderMuted: 'rgba(245, 242, 235, 0.08)'
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        display: ['Cinzel', 'Newsreader', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace']
      }
    },
  },
  plugins: [],
}
