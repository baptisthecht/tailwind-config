import type { Config } from "tailwindcss";

const colors = {
        white: "#FFFFFF",
        webgerest: "#1992A6",
        webresto: "#ff5e00",
        webstock: "#C161BC",
        ihoraire: "#D8A707",
        ifact: "#9825A4",
        webemop: "#818AC3",
        winmc: "#009EE2",
        imapia: "#2E55B7",
        webta: "#B70D6F",
        webcz: "#0AB269",
        ialert: "#E51F53",
        "wr-bleu-dark": "#157A8C",
        "wr-bleu-light": "#E9F5F7",
        "bleu-light": "#F0F5FF",
        "green": {
          DEFAULT: "#27AE60",
          dark: "#228C4D"
        },
        "red": "#D92715",
        "orange": "#F39C12",
        gray: {
          50: "#F8F9FB",
          100: "#F9F9FA",
          150: "#F4F4F4",
          200: "#EBEBEB",
          250: "#EEEFF4",
          300: "#DFE0EB",
          450: "#BCC0C7",
          550: "#ADB2BC",
          600: "#9FA2B4",
          650: "#717D94",
          700: "#667085",
          800: "#4E5666",
          900: "#31313F",
          1000: "#31313F"
        },
        stats: {
          1: "#95A5A6",
          2: "#727578",
          3: "#1D99AD",
          4: '#2980B9',
          5: "#3A4EA6",
          6: "#1E252B"
        },
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: process.env.CLIENT_NAME === "IANORD" ? colors.webresto : colors.webgerest,
        secondary: colors.gray[450],
      },
      fontSize: {
        "t-4xl": ["72px", "64px"],
        "t-3xl": ["56px", "48px"],
        "t-2xl": ["32px", "36px"],
        "t-xl": ["24px", "24px"],
        "t-md": ['18px', "16px"],
        "t-base": ['16px', "16px"],
        "b-lg": ['18px', "24px"],
        "b-md": ['16px', "16px"],
        "b-base": ['14px', "16px"],
        "b-caption": ["12px", "16px"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [],
};
export default config;
