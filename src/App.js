import NewCharacterWizard from "./NewCharacterWizard/NewCharacterWizard";
import ErrorBoundary from "./utils/ErrorBoundary";

export default function App() {
    return (
        <main>
            <ErrorBoundary>
                <NewCharacterWizard />
            </ErrorBoundary>
        </main>
    );
}
