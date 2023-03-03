/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: "#060047",
        sectionBg: "#eee",
        searchBox: "#ddd",
        buttonRed: "#D12600",
        paypal: "#002C6F",
        arrifm: "#000AFF",
        klarna: "#FF8181",
        AddtoCart: "#06C15C",
        buyNow: "#6A6AF5",
      },
    },
  },
  plugins: [],
};
