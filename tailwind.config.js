/** @type {import('tailwindcss').Config} */

module.exports ={
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'] 
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundColor: {'rgba-black-80': 'rgba(0, 0, 0, 0.8)',
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
