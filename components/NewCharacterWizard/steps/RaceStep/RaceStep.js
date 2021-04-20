import { FormProvider, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Select from "../../../forms/Select";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import PageHeading from "../../../ui/PageHeading";
import Loading from "../../../utils/Loading";
import StepForm from "../StepForm";
import RaceChoicesForm from "./RaceChoicesForm";

export default function RaceStep({ formState, goForward }) {
    const { data, isLoading, isError } = useQuery(["api", "races"]);
    const methods = useForm({
        defaultValues: {
            race: formState.race || "",
            speed: formState.speed,
            size: formState.size || "",
            abilityScoreBonus: formState.abilityScoreBonus || {},
            age: formState.age,
            alignment: formState.alignment || "",
            languages: formState.languages || [],
            languageOptions: formState.languageOptions || [],
            traits: formState.traits || []
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
            <FormProvider {...methods}>
                <StepForm onSubmit={handleSubmit(goForward)}>
                    <PageHeading>Choose your Race</PageHeading>
                    <Select
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
                    </Select>
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
