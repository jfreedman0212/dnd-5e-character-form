import styled from "styled-components";

const FieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 2px solid ${(props) => props.theme.colors.dark};
    background-color: transparent;
    & legend {
        font-weight: bold;
    }
`;

export default FieldSet;
