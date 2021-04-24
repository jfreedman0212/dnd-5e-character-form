import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 20px;
    }
  
    body {
        font-family: ${(props) => props.theme.fonts.join(",")};
        font-size: ${(props) => props.theme.fontSizes.medium};
        background-color: ${(props) => props.theme.colors.light};
        color: ${(props) => props.theme.colors.dark};
    }

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.medium}) {
        html {
            font-size: 18px;
        }
  }
`;

export default GlobalStyle;
