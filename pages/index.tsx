import styled from "styled-components";
import NewCharacterWizard from "../components/NewCharacterWizard/NewCharacterWizard";
import ErrorBoundary from "../components/utils/ErrorBoundary";

const Main = styled.main`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.medium};
`;

export default function MainCharacterForm() {
    return (
        <Main>
            <ErrorBoundary>
                <NewCharacterWizard />
            </ErrorBoundary>
        </Main>
    );
}
