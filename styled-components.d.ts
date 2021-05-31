import "styled-components";

declare module "styled-components" {
    type ShadeOptions = Readonly<{
        [900]: string;
        [800]: string;
        [700]: string;
        [600]: string;
        [500]: string;
        [400]: string;
        [300]: string;
        [200]: string;
        [100]: string;
    }>;

    type SizeOptions = Readonly<{
        extraLarge: string;
        large: string;
        medium: string;
        small: string;
        extraSmall: string;
    }>;

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

            readonly primaryShades: ShadeOptions;
            readonly successShades: ShadeOptions;
            readonly dangerShades: ShadeOptions;
            readonly warningShades: ShadeOptions;
            readonly infoShades: ShadeOptions;
            readonly neutralShades: ShadeOptions;
        };
        readonly spacing: {
            readonly [1]: string;
            readonly [2]: string;
            readonly [3]: string;
            readonly [4]: string;
            readonly [5]: string;
        };
        readonly fontSizes: SizeOptions;
        readonly fonts: string[];
        readonly breakpoints: SizeOptions;
    }
}
