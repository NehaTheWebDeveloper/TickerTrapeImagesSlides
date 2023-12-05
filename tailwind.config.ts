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

        "lightblue" :"#E9E8FE",
        "lightblue-2":"#F2F4F8",
        "lb":"#E2F5FF",
        "lightPink":"#FFF6E9",
        "darkBlack" :"#1E2834"
      },
    },
  },
  plugins: [],
}
export default config
