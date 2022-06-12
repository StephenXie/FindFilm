/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./filmmanager/frontend/src/**/*.{js,jsx,ts,tsx}", "./filmmanager/frontend/src/**/*.{html,htm,md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
