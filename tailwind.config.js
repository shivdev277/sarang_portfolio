/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0e13',
        surface: '#121722',
        surface2: '#171d2b',
        line: '#232b3d',
        text: '#e7ecf3',
        dim: '#8b96a8',
        amber: '#ffb454',
        cyan: '#5ee6d0',
        red: '#ff6b6b',
        purple: '#c792ea',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
