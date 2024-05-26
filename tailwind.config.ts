import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#DD2476",
        "secondary": "#FF5125",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
export default config;
