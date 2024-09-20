/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
 
  ],
  theme: {
 
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: ['focus-visible', 'active', 'hover', 'focus'],
      colors: {
        
        'custom-green': '#DDD4B3',
        'grey-1':'#555',
        'grey-2':'#adadad',
        'grey-body':'#faf8f8',
        'form-grey-border':'#ced4da',
        'form-input-color':'#495057',
        'golden': '#d4ac0d',
        'custom-contact':'#faf8f8'
      },
      screens: {
        'max-320': {'max': '320px'},
      },
      boxShadow: {
        'buttonShadow': '0 10px 20px -8px rgba(0, 0, 0, 0.7)',
      },  
    },
  
  },
  plugins: [],
};
