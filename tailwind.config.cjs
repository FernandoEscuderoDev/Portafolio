/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow:{
        sombra: "15px -10px 0px 0px rgba(239,239,44,1)",
      },
      colors: {
        manz: {
          DEFAULT: "#E1E111",
          50: "#F9F9B1",
          100: "#F8F89E",
          200: "#F5F578",
          300: "#F2F252",
          400: "#EFEF2C",
          500: "#E1E111",
          600: "#ADAD0D",
          700: "#797909",
          800: "#454505",
          900: "#101001",
        },
      },
    },
  },
  plugins: [],
};
