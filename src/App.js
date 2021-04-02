import NewCharacterWizard from "./NewCharacterWizard/NewCharacterWizard";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <NewCharacterWizard />
    </ErrorBoundary>
  );
}
