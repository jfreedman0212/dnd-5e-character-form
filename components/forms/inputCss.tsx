import { css } from "styled-components";

export const inputCss = css`
    border: none;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.neutralShades[900]};
    background-color: ${(props) => props.theme.colors.neutralShades[300]};
    padding: ${(props) => props.theme.spacing[1]};
    font-size: ${(props) => props.theme.fontSizes.medium};

    &:focus {
        outline: 2px solid ${(props) => props.theme.colors.primaryShades[500]};
    }
`;
