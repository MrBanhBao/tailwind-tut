/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },

    extend: {
      colors: {
        neongreen: {
          900: "#50ff05",
          800: "#89ff56",
          700: "#aeff8c"
        }
      }
    },
  },
  plugins: [],
}

