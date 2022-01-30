module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          DEFAULT: "#2C6749",
          50: "#81C9A5",
          100: "#73C39A",
          200: "#56B786",
          300: "#44A072",
          400: "#38845D",
          500: "#2C6749",
          600: "#1B402D",
          700: "#0A1811",
          800: "#000000",
          900: "#000000",
        },
      },
      backgroundImage: {
        map: "url('/public/assets/nbg.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
