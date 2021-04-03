import styled from "styled-components";

const FieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 1px solid ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
    & legend {
        font-weight: bold;
    }
`;

export default FieldSet;
