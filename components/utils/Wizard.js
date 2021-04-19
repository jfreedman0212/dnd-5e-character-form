import { useState } from "react";

export default function Wizard({ steps }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [wizardData, setWizardData] = useState({});

    function goForward(data) {
        setWizardData((oldData) => ({ ...oldData, ...data }));
        setCurrentStep((step) => {
            if (step < steps.length - 1) {
                return step + 1;
            }
            return step;
        });
    }

    function goBack() {
        setCurrentStep((step) => {
            if (step > 0) {
                return step - 1;
            }
            return step;
        });
    }

    const Current = steps[currentStep].component;

    return (
        <Current formState={wizardData} goForward={goForward} goBack={goBack} />
    );
}
