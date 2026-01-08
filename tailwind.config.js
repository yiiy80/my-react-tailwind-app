/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主要强调色 - Teal 400
        'primary': '#00BFA5',
        'primary-hover': '#008866',
        'primary-disabled': 'rgba(189, 189, 189, 0.5)',
        
        // 颜色方案
        'page-bg': '#000000',
        'input-bg': '#FFFFFF',
        'input-border': '#E0E0E0',
        'input-text': '#212121',
        'placeholder': '#9E9E9E',
        'checkbox-border': '#BDBDBD',
      },
      borderRadius: {
        'input': '4px',
        'button': '4px',
        'checkbox': '0px',
      },
      fontSize: {
        'input': '16px',
        'button': '16px',
        'link': '14px',
      },
      spacing: {
        'input-gap': '8px',
        'input-checkbox-gap': '16px',
        'checkbox-button-gap': '24px',
        'button-link-gap': '8px',
      },
      height: {
        'button': '40px',
      },
    },
  },
  plugins: [],
}
