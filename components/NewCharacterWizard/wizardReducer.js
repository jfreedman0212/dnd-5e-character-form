export const CharacterWizardAction = {
    COMPLETE_CLASS_STEP: "CLASS_STEP",
    COMPLETE_ABILITY_SCORE_STEP: "ABILITY_SCORE_STEP",
    COMPLETE_RACE_STEP: "RACE_STEP",
    GO_BACK: "GO_BACK"
};

export const CharacterWizardStep = {
    CLASS: "CLASS",
    ABILITY_SCORE: "ABILITY_SCORE",
    RACE:  "RACE"
};

export function wizardReducer(state, action) {
    console.debug("current state", state);
    console.debug("action", action);
    switch (action.type) {
        case CharacterWizardAction.COMPLETE_CLASS_STEP:
            return {
                ...state,
                currentStep: CharacterWizardStep.ABILITY_SCORE,
                formData: {
                    ...state.formData,
                    ...action.payload
                }
                // TODO: dedupe equipment and proficiencies?
            };
        case CharacterWizardAction.COMPLETE_ABILITY_SCORE_STEP:
            return {
                ...state,
                currentStep: CharacterWizardStep.RACE,
                formData: {
                    ...state.formData,
                    ...action.payload
                }
            };
        case CharacterWizardAction.COMPLETE_RACE_STEP:
            return {
                ...state
            };
        case CharacterWizardAction.GO_BACK:
            switch (state.currentStep) {
                case CharacterWizardStep.CLASS:
                    throw new Error(
                        "Can't go back while in CLASS step. This is an application issue."
                    );
                case CharacterWizardStep.ABILITY_SCORE:
                    return {
                        ...state,
                        currentStep: CharacterWizardStep.CLASS
                    };
                case CharacterWizardStep.RACE:
                    return {
                        ...state,
                        currentStep: CharacterWizardStep.ABILITY_SCORE
                    };
                default:
                    return state;
            }
        default:
            return state; // TODO: once all action types are done, make this throw an error
    }
}
