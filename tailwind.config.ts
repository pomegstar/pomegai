import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neonPink: "#FF10F0",
        neonPinkHover: "#D90DCC",
        reddishOrange: "#FF5F1F", // Bright orange-red
        deepBlack: "#050505", // Not pure black, for better depth
        glass: "rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #FF10F0 0deg, #FF5F1F 180deg, #FF10F0 360deg)',
      },
    },
  },
  plugins: [],
};
export default config;
