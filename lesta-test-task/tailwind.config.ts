import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { 
              // transform: 'translateX(100%)',
              opacity: '0'
            },
          '100%': {
            // transform: 'translateX(0)',
            opacity: '1',
          }
        },
        slideOut: {
          '0%': { 
              // transform: 'translateX(0)',
              opacity: '1'
            },
          '100%': {
            // transform: 'translateX(100%)',
            opacity: '0',
          }
        }
      },
      animation: {
        slideIn: 'slideIn 250ms ease-out both',
        slideOut: 'slideOut 250ms ease-in both',
      }
    },
  },
  plugins: [],
}
export default config
