import { css } from "styled-components";

export const headingCss = css`
    font-size: ${(props) => props.theme.fontSizes.large};
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.neutral[900]};
`;
