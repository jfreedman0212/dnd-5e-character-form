import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    colors: {
        primary: {
            [900]: "#140121",
            [800]: "#220238",
            [700]: "#3c0460",
            [600]: "#57088c",
            [500]: "#a84ee0",
            [400]: "#aa53e0",
            [300]: "#bc69ef",
            [200]: "#ca7cf9",
            [100]: "#ddabfc"
        },
        success: {
            [900]: "#032b0d",
            [800]: "#054214",
            [700]: "#08561a",
            [600]: "#0c7525",
            [500]: "#28a745",
            [400]: "#32c153",
            [300]: "#3ce062",
            [200]: "#65f787",
            [100]: "#90f9a9"
        },
        danger: {
            [900]: "#210004",
            [800]: "#420108",
            [700]: "#5e010c",
            [600]: "#9e0416",
            [500]: "#ed4455",
            [400]: "#fc5d6d",
            [300]: "#f76776",
            [200]: "#f9818d",
            [100]: "#f99da6"
        },
        warning: {
            [900]: "#302400",
            [800]: "#846405",
            [700]: "#b58907",
            [600]: "#cc9e16",
            [500]: "#ffc107",
            [400]: "#f9c62c",
            [300]: "#f9cf4f",
            [200]: "#f7d56f",
            [100]: "#fce399"
        },
        info: {
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
        neutral: {
            [900]: "#21252A",
            [800]: "#343A40",
            [700]: "#495057",
            [600]: "#868E96",
            [500]: "#ADB5BD",
            [400]: "#CFD4DA",
            [300]: "#E9ECEE",
            [200]: "#F1F3F5",
            [100]: "#F8F9FA"
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
        extraLarge: "3rem",
        large: "1.5rem",
        medium: "1rem",
        small: "0.9rem",
        extraSmall: "0.75rem"
    },
    fonts: ["Helvetica", "sans-serif"],
    breakpoints: {
        extraLarge: "1500px",
        large: "1200px",
        medium: "768px",
        small: "400px",
        extraSmall: "350px"
    }
};

// dark theme is just light theme, but with "light" and "dark" colors switched
export const darkTheme: DefaultTheme = {
    ...lightTheme
};
