import { Kumbh_Sans, Poppins } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        kumbhSans: ['Kumbh Sans', 'sans-serif'], // Define Raleway
        poppins: ['Poppins', 'serif'], // Define Marcellus,
        garamond: ['Garamond', 'serif'], // Define Garamond
      }
    },
  },
  plugins: [],
};
