import styled from "styled-components";

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing[1]};
`;

export default FormGroup;
