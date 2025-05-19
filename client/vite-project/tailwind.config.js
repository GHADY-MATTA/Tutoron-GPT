/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",    // If you're using plain HTML files
    "./src/**/*.{js,jsx,ts,tsx}", // For React components and other JS/TS files
    "./public/**/*.{html,js}", // If you have HTML files in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

