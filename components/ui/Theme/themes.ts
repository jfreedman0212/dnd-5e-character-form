export type AppTheme = Readonly<{
    colors: {
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        light: string;
        dark: string
    };
    fontSizes: {
        large: string;
        medium: string;
        small: string;
    };
    fonts: string[];
    breakpoints: {
        large: string;
        medium: string;
        small: string;
    };
}>;

export const lightTheme: AppTheme = {
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
export const darkTheme: AppTheme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        primary: "#C88CE3",
        light: lightTheme.colors.dark,
        dark: lightTheme.colors.light
    }
};