import styled from "styled-components";
import NewCharacterWizard from "../components/NewCharacterWizard/NewCharacterWizard";
import VisualModeToggle from "../components/ui/VisualModeToggle";
import ErrorBoundary from "../components/utils/ErrorBoundary";

const Main = styled.main`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.medium};
`;

const VisualModeToggleContainer = styled.aside`
    text-align: right;
`;

export default function MainCharacterForm() {
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
