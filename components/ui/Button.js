import styled from "styled-components";

const Button = styled.button`
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: 1.1rem;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.light};
    }
`;

export default Button;
