import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#6A45BE",
        header: "#222222",
        bambooGreen: "#9DFF50",
        spacialServices: "#333333",
        containerteam: "#2A2A2A",
        
      },
      colors: {
        textHeader: "#222222",
        textServices: "#DDDDDD",
        teamtext: "#666666",
        textHoverHeader: "#9DFF50",
        textColor: "#444444" 
      },
      screens: {
        'xs': '475px',
        'sm': '640px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1500px',
      }
    },
    height: {
        'screen-100': 'calc(100vh + 30px)',
    },
    boxShadow: {
      "card" : "20px 20px 0px #9DFF50, 10px 10px 80px white",
      "card2" : "20px -20px 0px #9DFF50, 10px 10px 80px white",
      "card3" : "-20px -20px 0px #9DFF50, 10px 10px 80px white"
    }
  },
  plugins: [],
};
export default config;
