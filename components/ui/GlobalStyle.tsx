import { createGlobalStyle, ThemeProps } from "styled-components";
import { AppTheme } from "./Theme/themes";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 20px;
    }
  
    body {
        font-family: ${(props: ThemeProps<AppTheme>) =>
            props.theme.fonts.join(",")};
        font-size: ${(props: ThemeProps<AppTheme>) =>
            props.theme.fontSizes.medium};
        background-color: ${(props: ThemeProps<AppTheme>) =>
            props.theme.colors.light};
        color: ${(props: ThemeProps<AppTheme>) => props.theme.colors.dark};
    }

    @media only screen and (min-width: ${({ theme }: ThemeProps<AppTheme>) =>
        theme.breakpoints.medium}) {
        html {
            font-size: 18px;
        }
  }
`;

export default GlobalStyle;
