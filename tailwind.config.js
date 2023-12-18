/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mSubrayada: ["Montserrat Subrayada", "sans-serif"],
      },

      colors: {
        lgray: "#F0F0F0",
        dgray: "#4C4C4C",
        dgreen: "#008B06",
        wblue: "#0D16FD",
        hcyan: "#06B6D4",
      },

      fontSize: {
        base: ["16px", "20px"],
        lg: ["18px", "22px"],

        "6xl": ["60px", "78px"],
      },
    },
    plugins: [],
  },
};
