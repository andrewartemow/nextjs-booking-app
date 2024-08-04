import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#091638',
      'light-blue': '#F3F3FA',
      'blue': '#1C3988',
      'hover': '#6E8AE9',
      'general': '#FFFFFF',
    },
  },
  plugins: [],
};
export default config;
