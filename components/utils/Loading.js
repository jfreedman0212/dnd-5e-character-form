import styled from "styled-components";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    font-size: 1.5rem;
`;

export default function Loading({ message }) {
    return (
        <LoadingContainer>
            <FontAwesomeIcon icon={faSpinner} spin />
            {message ? <span>{message}</span> : null}
        </LoadingContainer>
    );
}
