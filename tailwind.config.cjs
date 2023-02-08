/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#3E82FC",
        lightprimary: "#ECF3FF",
      },
      backgroundImage: {
        Hero: "url('assets/onkar.jpg')",
        Hero2: "url('assets/bgmmm.jpg')",
        Onkar: "url('assets/i5.jpg')",
        Skill: "url('assets/skill.jpg')",
        Surya: "url('assets/bgm.jpg')",
        Pbg: "url('assets/pbg.jpg')",
        Sbg: "url('assets/sbg.jpg')",
      },
    
     
    },
  },
  plugins: [],
}