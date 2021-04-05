import styled from "styled-components";

const Anchor = styled.a`
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export default Anchor;
