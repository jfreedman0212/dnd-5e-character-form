import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        readonly colors: {
            readonly primary: string;
            readonly secondary: string;
            readonly success: string;
            readonly danger: string;
            readonly warning: string;
            readonly info: string;
            readonly light: string;
            readonly dark: string;
        };
        readonly fontSizes: {
            readonly large: string;
            readonly medium: string;
            readonly small: string;
        };
        readonly fonts: string[];
        readonly breakpoints: {
            readonly large: string;
            readonly medium: string;
            readonly small: string;
        };
    }
}
