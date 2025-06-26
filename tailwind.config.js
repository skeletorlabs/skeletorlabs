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
      },
    },
  },
  plugins: [],
};
