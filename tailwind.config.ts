import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      colors: {
        bg: '#080808',
        surface: '#0f0f0f',
        border: '#1a1a1a',
        muted: '#333333',
        dim: '#666666',
        text: '#e8e8e8',
        accent: '#00ff88',
        'accent-dim': '#00cc6a',
        'accent-glow': 'rgba(0,255,136,0.15)',
      },
      animation: {
        'blink': 'blink 1.2s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
