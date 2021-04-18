import { FormProvider, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Select from "../../../forms/Select";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import PageHeading from "../../../ui/PageHeading";
import Loading from "../../../utils/Loading";
import StepForm from "../StepForm";
import RaceChoicesForm from "./RaceChoicesForm";
import { CharacterWizardAction } from "../../wizardReducer";

export default function RaceStep({ defaultValue, dispatch }) {
    const { data, isLoading, isError } = useQuery(["api", "races"]);
    const methods = useForm({
        defaultValues: {
            race: defaultValue.race || ""
        }
    });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = methods;
    const currentRace = watch("race");

    function goBack() {
        dispatch({ type: CharacterWizardAction.GO_BACK });
    }

    function submitForm(data) {
        dispatch({ type: CharacterWizardAction.COMPLETE_RACE_STEP, payload: data });
    }

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
                <StepForm onSubmit={handleSubmit(submitForm)}>
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
                        <Button onClick={goBack} type={"button"}>
                            Back
                        </Button>
                        <Button type={"submit"}>Next</Button>
                    </ButtonGroup>
                </StepForm>
            </FormProvider>
        </section>
    );
}
