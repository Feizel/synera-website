/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2a6d67',
          50: '#f0f9f8',
          500: '#2a6d67',
          600: '#235a55',
        },
        secondary: {
          DEFAULT: '#00cc66',
        },
        accent: {
          DEFAULT: '#f9f4ec',
        },
        neutral: {
          DEFAULT: '#2c2c2c',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(42, 109, 103, 0.1)',
        'soft-lg': '0 10px 40px -4px rgba(42, 109, 103, 0.15)',
      },
    },
  },
  plugins: [],
};
