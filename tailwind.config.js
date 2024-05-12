/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1920px',
    },
    fontFamily: {
      noto: 'var(--noto-font)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'bottom-blue-light-900': '0 1px 0 0 #E8F3FF',
        'blue-light-700': '0 0 0 1px #B9DCFF',
        balloon:
          '8px 8px 16px 0px rgba(185, 220, 255, 0.35) inset, -8px -8px 16px 0px rgba(255, 255, 255, 0.45) inset',
        'ballon-hover':
          '8px 8px 24px 0px rgba(12, 83, 153, 0.75) inset, -8px -8px 16px 0px rgba(185, 220, 255, 0.25) inset',
      },
      maxWidth: {
        168: '42rem',
        192: '48rem',
        1440: '1440px',
      },
      height: {
        mobileMenu: 'calc(100vh - 64px)',
        122: '488px',
      },
      width: {
        110: '440px',
      },
      colors: {
        dark: '#000E1D',
        blue: '#148AFF',
        yellow: '#FFCD38',
        red: '#ED5151',
        green: '#72B26A',
        bg: '#F8FBFF',
        'blue-dark': {
          100: '#127CE6',
          200: '#106ECC',
          300: '#0E61B3',
          400: '#0C5399',
          500: '#0A4580',
          600: '#083766',
          700: '#06294D',
          800: '#041C33',
          900: '#020E19',
        },
        'blue-light': {
          100: '#2B96FF',
          200: '#43A1FF',
          300: '#5BADFF',
          400: '#72B9FF',
          500: '#8AC5FF',
          600: '#A1D0FF',
          700: '#B9DCFF',
          800: '#D0E8FF',
          900: '#E8F3FF',
        },
        'yellow-dark': {
          100: '#E6B932',
          200: '#CCA42D',
          300: '#B39027',
          400: '#997B22',
          500: '#80671C',
          600: '#665216',
          700: '#4D3E11',
          800: '#33290B',
          900: '#191406',
        },
        'yellow-light': {
          100: '#FFD24C',
          200: '#FFD760',
          300: '#FFDC74',
          400: '#FFE188',
          500: '#FFE69C',
          600: '#FFEBAF',
          700: '#FFF0C3',
          800: '#FFF5D7',
          900: '#FFFAEB',
        },
        gray: {
          100: '#E0E0E6',
          200: '#C8C8CC',
          300: '#B0B0B3',
          400: '#989899',
          500: '#808080',
          600: '#4D5661',
          700: '#333E4A',
          800: '#192634',
        },
      },
      gridTemplateColumns: {
        'max-4': 'repeat(auto-fit, minmax(280px, 1fr))',
        'max-3': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
};
