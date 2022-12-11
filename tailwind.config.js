/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"DM Mono"', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        slate: {
          850: "#141c2a",
          900: "#111827",
        },
        otd: {
          slate: {
            DEFAULT: "#5D9194",
            50: "#e1f5f8",
            100: "#c9dfe3",
            200: "#adc9cf",
            300: "#8fb5ba",
            400: "#72a2a6",
            500: "#598a8d",
            600: "#43686e",
            700: "#2d494f",
            800: "#172a31",
            900: "#000c15",
          },
          cyan: {
            DEFAULT: "#1ABFC7",
            50: "#E8FBFC",
            100: "#C0F4F7",
            200: "#97EDF1",
            300: "#6FE6EC",
            400: "#46DFE7",
            500: "#1DD8E2",
            600: "#18ADB4",
            700: "#128287",
            800: "#0C575A",
            900: "#062B2D",
          },
          green: {
            DEFAULT: "#39FA96",
            50: "#ddfff2",
            100: "#b0fedb",
            200: "#81fcc1",
            300: "#51fba3",
            400: "#25f997",
            500: "#12e08b",
            600: "#04ae78",
            700: "#007c5e",
            800: "#004b3c",
            900: "#001b12",
          },
          pink: {
            DEFAULT: "#FB788B",
            50: "#ffe3e9",
            100: "#ffb4bf",
            200: "#fb8395",
            300: "#f9536a",
            400: "#f62540",
            500: "#dd1027",
            600: "#ac091f",
            700: "#7c0415",
            800: "#4b000c",
            900: "#1f0002",
          },
          purple: {
            DEFAULT: "#C71A8A",
            50: "#ffe5fe",
            100: "#fab9ec",
            200: "#f28dd9",
            300: "#eb60c4",
            400: "#e434ac",
            500: "#cb1b8d",
            600: "#9f1377",
            700: "#720b5c",
            800: "#47043d",
            900: "#1d001b",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": null,
            "blockquote p:last-of-type::after": null,
            "code::before": null,
            "code::after": null,
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
}
