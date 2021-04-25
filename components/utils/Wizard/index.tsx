import { useReducer } from "react";
import { WizardProps, WizardReducerAction, WizardState } from "./types";

function reducer(state: WizardState, action: WizardReducerAction): WizardState {
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

export default function Wizard(props: WizardProps) {
    const [{ currentStep, wizardData, steps }, dispatch] = useReducer(reducer, {
        steps: props.steps,
        currentStep: 0,
        wizardData: {}
    });

    function goForward(data: any) {
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
