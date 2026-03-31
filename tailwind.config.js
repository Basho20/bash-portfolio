/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory:        '#FAF7F2',
        parchment:    '#F2EDE4',
        linen:        '#E8E0D4',
        obsidian:     '#141210',
        charcoal:     '#2C2820',
        slate:        '#6B6358',
        ash:          '#A89F94',
        copper:       '#B87333',
        'copper-light':'#D4916A',
        'copper-dark': '#8A5520',
        moss:         '#4A5C45',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body:    ['var(--font-jakarta)',  'system-ui', 'sans-serif'],
        code:    ['var(--font-fira)',     'monospace'],
      },
      letterSpacing: {
        wide2: '0.18em',
        wide3: '0.24em',
      },
    },
  },
  plugins: [],
}