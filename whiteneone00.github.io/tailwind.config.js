/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(59, 130, 246, 0.35)",
          "0 0px 65px rgba(59, 130, 246, 0.2)"
        ]
      }
    }
  },
  plugins: [],
}

