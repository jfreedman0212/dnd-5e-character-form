import styled from "styled-components";

export default styled.section`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing[2]};
    background-color: ${(props) => props.theme.colors.neutral[300]};
    padding: ${(props) => props.theme.spacing[3]};
    border-top: 4px solid ${(props) => props.theme.colors.primary[500]};
    box-shadow: 0 4px 6px 0 ${(props) => props.theme.colors.neutral[600]};
`;
