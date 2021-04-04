export function wizardReducer(state, action) {
    console.debug("current state", state);
    console.debug("action", action);
    switch (action.type) {
        case "CLASS_STEP":
            return {
                ...state,
                currentStep: "ABILITY_SCORE",
                formData: {
                    ...state.formData,
                    ...action.payload
                }
                // TODO: dedupe equipment and proficiencies?
            };
        case "ABILITY_SCORE_STEP":
            return {
                ...state,
                currentStep: "RACE"
            };
        case "RACE_STEP":
            return {
                ...state
            };
        case "GO_BACK":
            switch (state.currentStep) {
                case "CLASS":
                    throw new Error(
                        "Can't go back while in CLASS step. This is an application issue."
                    );
                case "ABILITY_SCORE":
                    return {
                        ...state,
                        currentStep: "CLASS"
                    };
                case "RACE":
                    return {
                        ...state,
                        currentStep: "ABILITY_SCORE"
                    };
                default:
                    return state;
            }
        default:
            return state; // TODO: once all action types are done, make this throw an error
    }
}
