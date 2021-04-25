import { ComponentType } from "react";

export type WizardStepProps = Readonly<{
    formState: any;
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
          payload: any;
      }>;

export type WizardState = Readonly<{
      wizardData: any;
      currentStep: number;
      steps: WizardStep[];
}>;