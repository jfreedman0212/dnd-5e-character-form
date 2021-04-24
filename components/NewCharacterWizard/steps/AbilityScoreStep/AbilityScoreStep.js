import PageHeading from "../../../ui/PageHeading";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import StepForm from "../StepForm";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../../utils/Loading";
import Input from "../../../forms/Input";
import styled from "styled-components";
import { CharacterWizardStep } from "../../enums";
import Head from "next/head";

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

export default function AbilityScoreStep({ formState, goForward, goBack }) {
    const { data, status } = useQuery(["api", "ability-scores"]);

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
                    {data.results.map((score) => (
                        <Input
                            key={score.index}
                            label={score.name}
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
                                }
                            })}
                        />
                    ))}
                </AbilityScoreContainer>
                <ButtonGroup>
                    <Button onClick={goBack} type={"button"}>
                        Back
                    </Button>
                    <Button type={"submit"}>Next</Button>
                </ButtonGroup>
            </StepForm>
        </section>
    );
}
