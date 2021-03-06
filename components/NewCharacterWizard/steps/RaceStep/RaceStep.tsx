import { FormProvider, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Select from "../../../forms/Select";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import PageHeading from "../../../ui/PageHeading";
import Loading from "../../../utils/Loading";
import { CharacterWizardStep } from "../../enums";
import StepForm from "../StepForm";
import RaceChoicesForm from "./RaceChoicesForm";
import Head from "next/head";
import { WizardStepProps } from "../../../utils/Wizard/types";
import { ResourceList } from "../../../../lib/dnd5e_api";
import Checkbox from "../../../forms/Checkbox";
import FieldSet from "../../../forms/FieldSet";

export default function RaceStep({ formState, goForward }: WizardStepProps) {
    const { data, isLoading, isError } = useQuery<ResourceList>([
        "api",
        "races"
    ]);
    const methods = useForm({
        defaultValues: {
            race: "",
            subrace: "",
            size: "",
            abilityScoreBonus: {},
            alignment: "",
            languages: [],
            languageOptions: [],
            traits: [],
            proficiencies: [],
            proficiencyChoices: [],
            ...formState[CharacterWizardStep.RACE]
        }
    });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = methods;
    const currentRace = watch("race");

    if (isLoading) {
        return (
            <section>
                <Loading message={"Loading races..."} />
            </section>
        );
    }

    if (isError) {
        throw new Error(
            "Could not load classes! This is most likely an issue with the D&D API."
        );
    }

    return (
        <section>
            <Head>
                <title>New Character | Race</title>
            </Head>
            <FormProvider {...methods}>
                <StepForm onSubmit={handleSubmit(goForward)}>
                    <PageHeading>Choose your Race</PageHeading>
                    {/* <Select
                        {...register("race", {
                            required: "This field is required"
                        })}
                        label={"Race"}
                        errorMessage={errors?.race?.message}
                    >
                        <option value={""} disabled>
                            Please select a race
                        </option>
                        {data.results.map((race) => (
                            <option key={race.index} value={race.index}>
                                {race.name}
                            </option>
                        ))}
                    </Select> */}
                    <FieldSet>
                        {/* <legend>Choose your Race</legend> */}
                        {data.results.map((race) => (
                            <Checkbox
                                key={race.index}
                                type="radio"
                                value={race.index}
                                label={race.name}
                                {...register("race", {
                                    required: "This field is required"
                                })}
                            />
                        ))}
                    </FieldSet>
                    {currentRace && currentRace !== "" ? (
                        <RaceChoicesForm raceIndex={currentRace} />
                    ) : null}
                    <ButtonGroup>
                        <Button type={"submit"}>Next</Button>
                    </ButtonGroup>
                </StepForm>
            </FormProvider>
        </section>
    );
}
