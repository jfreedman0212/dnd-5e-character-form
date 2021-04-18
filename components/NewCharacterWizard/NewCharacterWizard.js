import ClassStep from "./steps/ClassStep/ClassStep";
import { useReducer } from "react";
import { wizardReducer, CharacterWizardStep } from "./wizardReducer";
import RaceStep from "./steps/RaceStep/RaceStep";
import AbilityScoreStep from "./steps/AbilityScoreStep/AbilityScoreStep";

export default function NewCharacterWizard() {
    const [wizardState, dispatch] = useReducer(wizardReducer, {
        currentStep: CharacterWizardStep.CLASS,
        formData: {}
    });

    switch (wizardState.currentStep) {
        case CharacterWizardStep.CLASS:
            return (
                <ClassStep
                    defaultValue={wizardState.formData}
                    dispatch={dispatch}
                />
            );
        case CharacterWizardStep.ABILITY_SCORE:
            return (
                <AbilityScoreStep
                    defaultValue={wizardState.formData}
                    dispatch={dispatch}
                />
            );
        case CharacterWizardStep.RACE:
            return (
                <RaceStep
                    defaultValue={wizardState.formData}
                    dispatch={dispatch}
                />
            );
        default:
            throw new Error(
                `Can't recognize step ${wizardState.currentStep}. This is an application error`
            );
    }
}
