import PageHeading from "../../../ui/PageHeading";
import Button from "../../../ui/Button";
import OutlineButton from "../../../ui/OutlineButton";
import ButtonGroup from "../../../ui/ButtonGroup";
import StepForm from "../StepForm";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../../utils/Loading";
import Input from "../../../forms/Input";
import styled from "styled-components";
import { CharacterWizardStep } from "../../enums";
import Head from "next/head";
import { WizardStepProps } from "../../../utils/Wizard/types";
import { ResourceList } from "../../../../lib/dnd5e_api";
import { useState } from "react";
import Anchor from "../../../ui/Anchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const AbilityScoreContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-auto-flow: row;

    @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.medium}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default function AbilityScoreStep({
    formState,
    goForward,
    goBack
}: WizardStepProps) {
    const [opened, setOpened] = useState(false);
    const { data, status } = useQuery<ResourceList>(["api", "ability-scores"]);
    const abilityScoreBonus =
        formState[CharacterWizardStep.RACE].abilityScoreBonus;
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            cha: "",
            con: "",
            dex: "",
            int: "",
            str: "",
            wis: "",
            ...formState[CharacterWizardStep.ABILITY_SCORE]
        }
    });

    if (status === "loading") {
        return (
            <section>
                <Loading />
            </section>
        );
    } else if (status === "error") {
        throw new Error(
            "Could not load Ability Scores! This is most likely an issue with the D&D API."
        );
    } else if (status === "idle") {
        throw new Error(
            "Query for Ability Scores is idle. This is an application issue."
        );
    }

    return (
        <section>
            <Head>
                <title>New Character | Ability Scores</title>
            </Head>
            <StepForm onSubmit={handleSubmit(goForward)}>
                <PageHeading>Choose your Ability Scores</PageHeading>
                <AbilityScoreContainer>
                    {data.results.map((score) => {
                        let label = score.name;
                        if (abilityScoreBonus[score.index]) {
                            label = `${score.name} +${
                                abilityScoreBonus[score.index]
                            }`;
                        }
                        return (
                            <Input
                                key={score.index}
                                label={label}
                                type={"number"}
                                errorMessage={errors?.[score.index]?.message}
                                {...register(score.index, {
                                    required: "This field is required.",
                                    min: {
                                        value: 1,
                                        message: "Must be at least 1."
                                    },
                                    max: {
                                        value: 20,
                                        message: "Must be no greater than 20."
                                    },
                                    valueAsNumber: true
                                })}
                            />
                        );
                    })}
                </AbilityScoreContainer>
                <Anchor onClick={() => setOpened((x) => !x)}>
                    <FontAwesomeIcon icon={faQuestionCircle} fixedWidth />
                    {opened ? "Hide Help" : "Show Help"}
                </Anchor>
                {opened ? (
                    <div>
                        If the Ability Score has a modifier next to it (ex: +2),
                        then add that modifier to the value you were going to
                        put there. So, if you want 14 for your STR score and +2
                        is displayed, your STR score will be 16. These modifiers
                        will come from the Race you chose.
                    </div>
                ) : null}
                <ButtonGroup>
                    <OutlineButton onClick={goBack} type={"button"}>
                        Back
                    </OutlineButton>
                    <Button type={"submit"}>Next</Button>
                </ButtonGroup>
            </StepForm>
        </section>
    );
}
