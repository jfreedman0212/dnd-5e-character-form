import styled from "styled-components";
import NewCharacterWizard from "./NewCharacterWizard/NewCharacterWizard";
import ErrorBoundary from "./utils/ErrorBoundary";

const Main = styled.main`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.medium};
`;

export default function App() {
    return (
        <Main>
            <ErrorBoundary>
                <NewCharacterWizard />
            </ErrorBoundary>
        </Main>
    );
}
