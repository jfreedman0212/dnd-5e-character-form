import styled from "styled-components";

const Button = styled.button<{ color: string }>`
    border: none;
    border-radius: 10px;
    margin: 0;
    color: ${(props) => {
        return props.theme.colors[props.color + "Shades"][900];
    }};
    background-color: ${(props) =>
        props.theme.colors[props.color + "Shades"][500]};
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.medium};
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.theme.colors[props.color + "Shades"][300]};
    }
`;

export default Button;
