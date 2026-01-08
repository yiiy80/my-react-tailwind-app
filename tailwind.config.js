/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主要强调色 - 使用 CSS 变量以支持主题切换
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-disabled': 'var(--color-primary-disabled)',

        // 颜色方案（由 CSS 变量控制）
        'page-bg': 'var(--color-page-bg)',
        'input-bg': 'var(--color-input-bg)',
        'input-border': 'var(--color-input-border)',
        'input-text': 'var(--color-input-text)',
        'placeholder': 'var(--color-placeholder)',
        'checkbox-border': 'var(--color-checkbox-border)',
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
