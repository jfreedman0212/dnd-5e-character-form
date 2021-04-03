import styled from "styled-components";

const Button = styled.button`
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 0;
    color: ${(props) => props.theme.primary};
    background-color: white;
    padding: 0.5rem 1rem;
    font-weight: bold;

    &:hover {
        background-color: ${(props) => props.theme.secondary};
    }
`;

export default Button;
