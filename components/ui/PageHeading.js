import styled from "styled-components";

const PageHeading = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.large};
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
`;

export default PageHeading;
