import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          bg: "#DFFFE4", // Primary background - pastel mint green
          text: "#114B2C", // Primary text/heading - dark forest green
          accent: "#4CAF50", // Accent color for buttons/icons
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          text: "#3C6F50", // Secondary text - medium green-gray
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
          bg: "#F0FFF4", // Card background - very pale green
        },
        neutral: {
          bg: "#F8F8F8", // Neutral background - off-white
        },
        button: {
          primary: "#2E7D32", // Primary button background
          "primary-hover": "#1B5E20", // Primary button hover
          secondary: "#4CAF50", // Secondary button border/text
          "secondary-hover": "#A5D6A7", // Secondary button hover
        },
        highlight: {
          bg: "#C8E6C9", // Highlight/tag background - light green
        },
        loader: "#66BB6A", // Loading spinner color
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontWeight: {
        heading: "600",
        subheading: "500",
        body: "400",
        "body-medium": "500",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
