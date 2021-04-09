import { css } from "styled-components";

export const inputCss = css`
    border: none;
    outline: 2px solid ${(props) => props.theme.colors.dark};
    border-radius: 0;
    color: ${(props) => props.theme.colors.dark};
    background-color: transparent;
    padding: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.medium};

    &:focus {
        outline: 2px solid ${(props) => props.theme.colors.primary};
    }
`;
