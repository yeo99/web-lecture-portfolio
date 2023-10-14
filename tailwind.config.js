const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
          mob: "375px",
          tablet: "768px",
          laptop: "1024px",
          laptopl: "1440px",
          desktop: "1280px",
      },
      extend: {
        animation: {
          fadeIn: "fadeIn 2s ease-in forwards"
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 }
          }
        }
      },
      variants: {
        animation: ["motion-safe"]
      }
  },
  plugins: [Myclass],
};
