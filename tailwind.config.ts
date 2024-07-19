import type { Config } from "tailwindcss"

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


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      colors: {
        ...colors,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: process.env.CLIENT_NAME === "IANORD" ? colors.webresto : colors.webgerest,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config