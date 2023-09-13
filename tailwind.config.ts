import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    customClasses: {
      containerX: "px-4 md:px-8 lg:px-16 xl:px-20",
    },
    extend: {
      colors: {
        "primary-color": {
          10: "#BE123C1A",
          20: "#BE123C33",
          40: "#F8E7EB66",
          70: "#BE123CB2",
          100: "#BE123C",
        },
        "primary-text-color": "#333",
        "secondary-text-color": "#9CA3AF",
      },
    },
  },
  plugins: [],
};
export default config;
