import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "GO_FORWARD":
            return {
                ...state,
                wizardData: {
                    ...state.wizardData,
                    [state.steps[state.currentStep].name]: action.payload
                },
                currentStep:
                    state.currentStep < state.steps.length - 1
                        ? state.currentStep + 1
                        : state.currentStep
            };
        case "GO_BACK":
            return {
                ...state,
                currentStep:
                    state.currentStep > 0
                        ? state.currentStep - 1
                        : state.currentStep
            };
    }
}

export default function Wizard({ steps }) {
    const [{ currentStep, wizardData }, dispatch] = useReducer(reducer, {
        steps,
        currentStep: 0,
        wizardData: {}
    });

    function goForward(data) {
        dispatch({ type: "GO_FORWARD", payload: data });
    }

    function goBack() {
        dispatch({ type: "GO_BACK" });
    }

    const Current = steps[currentStep].component;

    return (
        <Current formState={wizardData} goForward={goForward} goBack={goBack} />
    );
}
