import { ComponentType } from "react";

type FormState = any;
type WizardSubmitPayload = any;

export type WizardStepProps = Readonly<{
    formState: FormState;
    goBack: () => unknown;
    goForward: (data: any) => unknown;
}>;

export type WizardStep = Readonly<{
    name: string;
    component: ComponentType<WizardStepProps>;
}>;

export type WizardProps = Readonly<{
    steps: WizardStep[];
}>;

export type WizardReducerAction =
    | Readonly<{
          type: "GO_BACK";
      }>
    | Readonly<{
          type: "GO_FORWARD";
          payload: WizardSubmitPayload;
      }>;

export type WizardState = Readonly<{
    wizardData: WizardSubmitPayload;
    currentStep: number;
    steps: WizardStep[];
}>;
