/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0A2540",        // dark navy
        gold: "#e4ac13",           // premium gold (better than HSL)
        goldLight: "#ffbb00",      // gradient support
        bgLight: "#EEF2F6",        // hero background
      },

      boxShadow: {
        premium: "0 20px 60px rgba(0,0,0,0.25)",
        soft: "0 10px 25px rgba(0,0,0,0.1)",
      },

      animation: {
        float1: "float1 4s ease-in-out infinite",
        float2: "float2 5s ease-in-out infinite",
        float3: "float3 6s ease-in-out infinite",
      },

      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },

  plugins: [],
};