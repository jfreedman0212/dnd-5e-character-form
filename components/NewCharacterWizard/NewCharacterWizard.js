import ClassStep from "./steps/ClassStep/ClassStep";
import { CharacterWizardStep } from "./enums";
import RaceStep from "./steps/RaceStep/RaceStep";
import AbilityScoreStep from "./steps/AbilityScoreStep/AbilityScoreStep";
import Wizard from "../utils/Wizard";

const steps = [
    {
        name: CharacterWizardStep.RACE,
        component: RaceStep
    },
    {
        name: CharacterWizardStep.CLASS,
        component: ClassStep
    },
    {
        name: CharacterWizardStep.ABILITY_SCORE,
        component: AbilityScoreStep
    }
];

export default function NewCharacterWizard() {
    return <Wizard steps={steps} />;
}
