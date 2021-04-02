import ClassStep from "./steps/ClassStep/ClassStep";
import { useReducer } from "react";
import wizardReducer from "./wizardReducer";
import RaceStep from "./steps/RaceStep/RaceStep";

export default function NewCharacterWizard() {
  const [wizardState, dispatch] = useReducer(wizardReducer, {
    currentStep: "CLASS",
    formData: {}
  });
  let currentPage;
  switch (wizardState.currentStep) {
    case "CLASS":
      currentPage = (
        <ClassStep defaultValue={wizardState.formData} dispatch={dispatch} />
      );
      break;
    case "RACE":
      currentPage = (
        <RaceStep defaultValue={wizardState.formData} dispatch={dispatch} />
      );
      break;
    default:
      throw new Error(
        `Can't recognize step ${wizardState.currentStep}. This is an application error`
      );
  }
  return <section>{currentPage}</section>;
}
