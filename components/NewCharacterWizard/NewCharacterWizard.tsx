import ClassStep from "./steps/ClassStep/ClassStep";
import { CharacterWizardStep } from "./enums";
import RaceStep from "./steps/RaceStep/RaceStep";
import AbilityScoreStep from "./steps/AbilityScoreStep/AbilityScoreStep";
import Wizard from "../utils/Wizard";
import { useQueryClient } from "react-query";
import { useEffect } from "react";
import Head from "next/head";
import { WizardStep } from "../utils/Wizard/types";

const steps: WizardStep[] = [
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
    const queryClient = useQueryClient();
    useEffect(() => {
        Promise.all([
            queryClient.prefetchQuery(["api", "classes"]),
            queryClient.prefetchQuery(["api", "races"]),
            queryClient.prefetchQuery(["api", "alignments"])
        ]);
    }, [queryClient]);
    return (
        <>
            <Head>
                <title>New Character</title>
            </Head>
            <Wizard steps={steps} />
        </>
    );
}
