import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:"#000000",
        Primary:"#ffffff",
        Primary1:"#363738",
        Secondary:"#F5F5F5",
        Secondary1:"#FEFAF1",
        Secondary2:"#DB4444",
        text:"#FAFAFA",
        Text1:"#7D8184",
        Text2:"#000000",
        Button:"#000000",
        Button1:"#00FF66",
        Button2:"#DB4444",
        HoverButton:"#E07575",
      
      },
    },
  },
  plugins: [],
};
export default config;
