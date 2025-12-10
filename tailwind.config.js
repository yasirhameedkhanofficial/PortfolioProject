module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRightIn: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRightOut: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
        fadeInBg: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOutBg: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        slideRightIn: "slideRightIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        slideRightOut: "slideRightOut 0.35s ease forwards",
        fadeInBg: "fadeInBg 0.4s ease forwards",
        fadeOutBg: "fadeOutBg 0.35s ease forwards",
      },
    },
  },
  plugins: [],
};
