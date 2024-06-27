import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        inner: "800px",
      },
      colors: {
        primary: "rgba(82, 242, 185, 1)",
        "primary/8": "rgba(82, 242, 185, 0.08)",
        "white/2": "rgba(255, 255, 255, 0.02)",
      },
      padding: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
