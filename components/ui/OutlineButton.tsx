import styled from "styled-components";

const OutlineButton = styled.button<{ palette?: string }>`
    border: 1px solid
        ${(props) => {
            return props.theme.colors.neutral[500];
        }};
    border-radius: 10px;
    margin: 0;
    color: ${(props) => {
        return props.theme.colors.neutral[900];
    }};
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.medium};
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.theme.colors[props.palette][300]};
        color: ${(props) => {
            return props.theme.colors[props.palette][900];
        }};
        border: 1px solid
            ${(props) => props.theme.colors[props.palette][300]};
    }
`;

OutlineButton.defaultProps = {
    palette: "primary"
};

export default OutlineButton;
