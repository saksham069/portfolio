/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
      outlineColor: {
        DEFAULT: "var(--ring)",
      },
      backgroundColor: {
        DEFAULT: "var(--background)",
      },
      textColor: {
        DEFAULT: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
