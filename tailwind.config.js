// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 确保扫描 src 目录下的所有文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}