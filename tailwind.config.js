/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bgBlur: "rgba(0, 0, 0, 0.25)",
          bgClr: "#FFFFFF",
          FontClr: "#282828",
          gray: "#5F5E5B",
          grayLight: "#AEAEAE",
          AccentPink: "#FB2576",
          AccentLightBlue: "#D3E5EF",
          AccentLightPurple: "#E1D3F8",
          AccentLightOrange: "#FBEECC",
        },
        dark: {
          bgClr: "green",
        },
      },
      boxShadow: {
        "custom-8": "0px 0px 8px rgba(0, 0, 0, 0.25)",
        "custom-3": "0px 0px 3px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        "max-1029": { max: "1029px" },
        "max-1024": { max: "1024px" },
        "max-768": { max: "768px" },
        "max-640": { max: "640px" },
        "max-510": { max: "510px" },
        "max-480": { max: "480px" },
        "max-578": { max: "578px" },
      },
    },
  },
  plugins: [],
};
