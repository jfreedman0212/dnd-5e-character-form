import styled from "styled-components";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingContainer = styled.div`
    display: flex;
    gap: ${(props) => props.theme.spacing[3]};
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.large};
`;

type LoadingProps = Readonly<{
    message?: string;
}>;

export default function Loading({ message }: LoadingProps) {
    return (
        <LoadingContainer>
            <FontAwesomeIcon icon={faSpinner} spin />
            {message ? <span>{message}</span> : null}
        </LoadingContainer>
    );
}
