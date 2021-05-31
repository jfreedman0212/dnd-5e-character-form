import styled from "styled-components";

const ErrorMessage = styled.small`
    color: ${(props) => props.theme.colors.danger[500]};
    font-size: ${(props) => props.theme.fontSizes.medium};
`;

export default ErrorMessage;
