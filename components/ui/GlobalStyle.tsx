import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 20px;
    }
  
    body {
        font-family: ${(props) => props.theme.fonts.join(",")};
        font-size: ${(props) => props.theme.fontSizes.medium};
        background-color: ${(props) => props.theme.colors.neutral[400]};
        color: ${(props) => props.theme.colors.neutral[900]};
    }

    ${(props) => css`
        @media only screen and (min-width: ${props.theme.breakpoints.medium}) {
            html {
                font-size: 18px;
            }
        }
    `}

`;

export default GlobalStyle;
