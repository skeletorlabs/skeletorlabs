/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('/space.svg')",
        "space-content": "url('/space.jpg')",
        eth2: "url('/ETH2.svg')",
        eth3: "url('/ETH3.svg')",
        eth6: "url('/ETH6.svg')",
        samurai: "url(/cyborg-male.png)",
        onering: "url(/onering-notebook.png)",
      },
      colors: {
        "skeletor-gray": "#222338",
        "skeletor-dark-violet": "#0D0919",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
