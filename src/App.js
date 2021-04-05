import styled from "styled-components";
import NewCharacterWizard from "./NewCharacterWizard/NewCharacterWizard";
import VisualModeToggle from "./ui/VisualModeToggle";
import ErrorBoundary from "./utils/ErrorBoundary";

const Main = styled.main`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.medium};
`;

const VisualModeToggleContainer = styled.aside`
    text-align: right;
`;

export default function App() {
    return (
        <Main>
            <ErrorBoundary>
                <VisualModeToggleContainer>
                    <VisualModeToggle />
                </VisualModeToggleContainer>
                <NewCharacterWizard />
            </ErrorBoundary>
        </Main>
    );
}
