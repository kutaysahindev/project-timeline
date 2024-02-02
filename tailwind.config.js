/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-trs": "#9b9b9b8c"
      },
      dropShadow: {
        "white": "0 0 3px #ffffff",
        "react": [
          "-8px 0 10px #3c8ef9ca",
          "8px 0 10px #25ffe2bc"
        ],
        "vite": [
          "-8px 0 10px #8e3cf9ca",
          "8px 0 10px #ffe925bc"
        ],
        "redux": [
          "-8px 0 10px #3c97f9ca",
          "8px 0 10px #8556f3ca"
        ],
        "router": [
          "-8px 0 10px #9fc2e8ca",
          "8px 0 10px #ec2c22ca"
        ],
        "css": [
          "-8px 0 10px #264ce4d7",
          "8px 0 10px #9fafedd7"
        ],
        "okta": [
          "-8px 0 10px #007dc1",
          "8px 0 10px #00c191"
        ],
        "azure": [
          "-8px 0 10px #35b7ed",
          "8px 0 10px #3547ed"
        ],
        "axios": [
          "-8px 0 10px #5a29e4",
          "8px 0 10px #927ec9"
        ],
        "eslint": [
          "-8px 0 10px #4b32c3",
          "8px 0 10px #7c6ccb"
        ],
      }
    },
  },
  plugins: [],
}

