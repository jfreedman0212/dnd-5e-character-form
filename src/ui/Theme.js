import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "#FFA500",
        secondary: "#6c757d",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
        light: "#f8f9fa",
        dark: "#343a40"
    },
    fontSizes: {
        large: "1.5rem",
        medium: "1rem",
        small: "0.9rem"
    },
    fonts: ["Helvetica", "sans-serif"],
    breakpoints: {
        large: "1200px",
        medium: "768px",
        small: "400px"
    }
};

// TODO: use local storage and some global switch to change between dark/light mode

const isDark = true;

let newTheme = theme;

if (isDark) {
    newTheme = {
        ...theme,
        colors: {
            ...theme.colors,
            light: theme.colors.dark,
            dark: theme.colors.light
        }
    };
}

export default function Theme({ children }) {
    return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
}
