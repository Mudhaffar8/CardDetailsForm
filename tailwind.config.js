/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          one: "var(--c-primary-one)",
          two: "var(--c-primary-two)",
          three: "var(--c-primary-three)"
        },
        neutral: {
          one: "var(--c-neutral-one)",
          two: "var(--c-neutral-two)",
          three: "var(--c-neutral-three)",
        },
      }
    },
  },
  plugins: [],
}

