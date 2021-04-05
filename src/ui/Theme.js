import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    colors: {
        primary: "#A63AE9",
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

// dark theme is just light theme, but with "light" and "dark" colors switched
const darkTheme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        primary: "#C88CE3",
        light: lightTheme.colors.dark,
        dark: lightTheme.colors.light
    }
};

const VisualModeValueContext = createContext(null);
const VisualModeDispatchContext = createContext(null);

export function Theme({ children }) {
    const [visualMode, setVisualMode] = useState(VisualMode.LIGHT);
    let currentTheme;
    switch (visualMode) {
        case VisualMode.LIGHT:
            currentTheme = lightTheme;
            break;
        case VisualMode.DARK:
            currentTheme = darkTheme;
            break;
        default:
            throw new Error(`Invalid visual mode ${visualMode}`);
    }
    return (
        <VisualModeDispatchContext.Provider value={setVisualMode}>
            <VisualModeValueContext.Provider value={visualMode}>
                <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
            </VisualModeValueContext.Provider>
        </VisualModeDispatchContext.Provider>
    );
}

export function useVisualModeValue() {
    const visualMode = useContext(VisualModeValueContext);
    if (!visualMode) {
        throw new Error("Must wrap in Theme to use this hook!");
    }
    return visualMode;
}

export function useVisualModeDispatch() {
    const setVisualMode = useContext(VisualModeDispatchContext);
    if (!setVisualMode) {
        throw new Error("Must wrap in Theme to use this hook!");
    }
    return setVisualMode;
}

export const VisualMode = {
    LIGHT: "light",
    DARK: "dark"
};
