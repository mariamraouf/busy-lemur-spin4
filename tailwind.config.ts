import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // Changed to Quicksand
        arabic: ['Tajawal', 'sans-serif'], // Specific for Arabic
      },
      lineHeight: { // Added custom line height for Arabic
        'arabic-loose': '1.8', 
      },
      colors: {
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom Sidra Med colors - updated to match the provided palette
        sidraPrimary: '#449CA6',
        sidraSecondary: '#29A6A6',
        sidraAccent: '#80A6A6',
        sidraTeal: '#03A696',
        sidraLight: '#F2F2F2',
        // Removed sidraPurple, sidraPink, sidraOrange, sidraEmerald, sidraCyan, sidraIndigo
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' }
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'none' }
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        // LTR animations
        'scroll-left': { // Visually moves left (content moves left)
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }, 
        },
        'scroll-right': { // Visually moves right (content moves right)
          from: { transform: 'translateX(-50%)' }, 
          to: { transform: 'translateX(0)' }, 
        },
        // RTL specific animations (visually mirrored)
        'scroll-left-rtl': { // Visually moves left in RTL (content moves right)
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(50%)' },
        },
        'scroll-right-rtl': { // Visually moves right in RTL (content moves left)
          from: { transform: 'translateX(50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce-slow 3s infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'scroll-left': 'scroll-left var(--scroll-duration) linear infinite',
        'scroll-right': 'scroll-right var(--scroll-duration) linear infinite',
        'scroll-left-rtl': 'scroll-left-rtl var(--scroll-duration) linear infinite',
        'scroll-right-rtl': 'scroll-right-rtl var(--scroll-duration) linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;