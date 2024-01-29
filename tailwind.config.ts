import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "purple-xl" : "#7474cd",
        "purple-lg": "#898ece",
        "purple-md": "#b0b5e0",
        "purple-sm": "#daddf1"
      },
      screens: {
        // ...
        'xsm': '360px',
      },
      width: {
        '100' : '520px'
      }
    },

  },
  plugins: [],
}
export default config
