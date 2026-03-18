/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          yellow: '#FEE61D', // Amarillo vibrante, Pantone: Yellow 012 C
          blue: '#042067',   // Azul marino profundo, Pantone: 281 C
          white: '#FFFFFF',  // Blanco puro
          dark: '#0a0f1c'    // Un azul aún más oscuro para fondos
        }
      },
      fontFamily: {
        // Tipografías que simulan Swis721 y Humnst777 para un look Racing/Deportivo
        'racing': ['"Arial Black"', 'Impact', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(to right bottom, rgba(4, 32, 103, 0.9), rgba(10, 15, 28, 0.95))"
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
