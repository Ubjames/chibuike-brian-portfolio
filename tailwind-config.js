tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#11b4d4",
                "background-light": "#f6f8f8",
                "background-dark": "#101f22",
                "surface-dark": "#1a2c30",
                "card-dark": "#16282d",
                "surface-light": "#ffffff",
                // "surface-dark": "#16262a",


            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
                "signature": ["Nothing You Could Do", "cursive"],
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        }
    }
}