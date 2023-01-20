/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '600px',
      lg: '900px',
      xl: '1200px'
    },
    colors: {
      accent: 'hsl(278, 68%, 11%)',
      lightGrey: 'hsl(270, 3%, 87%)',
      darkGrey: 'hsl(279, 6%, 55%)',
      white: 'hsl(0, 0%, 100%)',
      active1: 'hsl(249, 99%, 64%)',
      active2: 'hsl(278, 94%, 30%)',
      error: 'hsl(0, 100%, 66%)'
    },
    fontFamily: {
      main: ['Space Grotesk', 'sans-serif']
    },
    fontWeight: {
      medium: 500,
    },
    fontSize: {
      s: '12px',
      m: '14px',
      l: '18px',
      xl: '28px'
    },
    lineHeight: {
      1: '15px',
      2: '18px',
      3: '23px',
      4: '36px'
    },
    letterSpacing: {
      wide: '2px',
      wider: '3.42222px'
    }
  },
  plugins: [],
}
