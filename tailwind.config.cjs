/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    
    colors: {
      primary: "#F4C6B8",
      secondary: "#00f6ff",
      white: "rgba(255, 255, 255)",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
       customBlue: '#5FA1C7',
       coolGrey: "#91A1AB",
       paleSky: "#CAD7DF",
       dustyBlue: "#748DA6",
       deepBlue: "#00274D",
       lightPeach: "#F9F5E8"
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      greatVibes: ["Great Vibes", "cursive"], 
    },
    
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
  animation: {
    fadeIn: 'fadeIn 2s ease-in-out',
  },
  
};
export const plugins = [];