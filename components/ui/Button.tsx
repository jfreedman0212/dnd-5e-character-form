import styled from "styled-components";

const Button = styled.button<{ palette?: string }>`
    border: 1px solid
        ${(props) => props.theme.colors[props.palette + "Shades"][500]};
    border-radius: 10px;
    margin: 0;
    color: ${(props) => {
        return props.theme.colors[props.palette + "Shades"][900];
    }};
    background-color: ${(props) =>
        props.theme.colors[props.palette + "Shades"][500]};
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.medium};
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.theme.colors[props.palette + "Shades"][300]};
        border-color: ${(props) =>
            props.theme.colors[props.palette + "Shades"][300]};
    }
`;

Button.defaultProps = {
    palette: "primary"
};

export default Button;
