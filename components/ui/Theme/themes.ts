import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    colors: {
        primary: "#A63AE9",
        secondary: "#6c757d",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
        light: "#f8f9fa",
        dark: "#343a40",

        primaryShades: {
            [900]: "#570589",
            [800]: "#69149e",
            [700]: "#842eba",
            [600]: "#9740ce",
            [500]: "#a24bd8",
            [400]: "#aa53e0",
            [300]: "#bc69ef",
            [200]: "#ca7cf9",
            [100]: "#ddabfc"
        },
        successShades: {
            [900]: "#0c6020",
            [800]: "#117729",
            [700]: "#188732",
            [600]: "#1e993b",
            [500]: "#28a745",
            [400]: "#31c453",
            [300]: "#35d65b",
            [200]: "#3ae862",
            [100]: "#90f9a9"
        },
        dangerShades: {
            [900]: "#59010a",
            [800]: "#7a0410",
            [700]: "#930211",
            [600]: "#c11123",
            [500]: "#dc3545",
            [400]: "#f74f5f",
            [300]: "#f76776",
            [200]: "#f9818d",
            [100]: "#f99da6"
        },
        warningShades: {
            [900]: "#664d02",
            [800]: "#846405",
            [700]: "#b58907",
            [600]: "#cc9e16",
            [500]: "#ffc107",
            [400]: "#f9c62c",
            [300]: "#f9cf4f",
            [200]: "#f7d56f",
            [100]: "#fce399"
        },
        infoShades: {
            [900]: "#012a30",
            [800]: "#0c4c56",
            [700]: "#116e7c",
            [600]: "#1592a5",
            [500]: "#17a2b8",
            [400]: "#7fc6d1",
            [300]: "#86cbd6",
            [200]: "#aae6ef",
            [100]: "#ccf3f9"
        },
        neutralShades: {
            [900]: "#343a40",
            [800]: "#495056",
            [700]: "#636a70",
            [600]: "#787d82",
            [500]: "#929599",
            [400]: "#afb2b5",
            [300]: "#cccdce",
            [200]: "#e0e3e5",
            [100]: "#f8f9fa"
        }
    },
    spacing: {
        [1]: "0.25rem",
        [2]: "0.75rem",
        [3]: "1.25rem",
        [4]: "2.5rem",
        [5]: "4rem"
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
export const darkTheme: DefaultTheme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        primary: "#C88CE3",
        light: lightTheme.colors.dark,
        dark: lightTheme.colors.light
    }
};
