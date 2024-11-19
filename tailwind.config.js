/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                Gray: "#F5F5F5", // Define your custom color
            },
            fontFamily: {
                jost: ['"Jost"', "sans-serif"], // Add Jost as a font option
            },
            keyframes: {
                slideUpFade: {
                    "0%": { transform: "translateY(100%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDownFade: {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "100%": { transform: "translateY(100%)", opacity: "0" },
                },
            },
            animation: {
                slideUpFade: "slideUpFade 0.3s ease-out",
                slideDownFade: "slideDownFade 0.3s ease-out",
            },
        },
    },
    plugins: [],
};
