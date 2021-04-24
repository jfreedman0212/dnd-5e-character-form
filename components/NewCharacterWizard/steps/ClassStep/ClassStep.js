import { useQuery } from "react-query";
import { FormProvider, useForm } from "react-hook-form";
import Loading from "../../../utils/Loading";
import ClassChoicesForm from "./ClassChoicesForm";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import Select from "../../../forms/Select";
import StepForm from "../StepForm";
import PageHeading from "../../../ui/PageHeading";
import { CharacterWizardStep } from "../../enums";

export default function ClassStep({ formState, goForward, goBack }) {
    const { data, isLoading, isError } = useQuery(["api", "classes"]);
    const methods = useForm({
        defaultValues: {
            class: "",
            hitDie: "",
            proficiencies: [],
            proficiencyOptions: [],
            equipment: [],
            savingThrows: [],
            ...formState[CharacterWizardStep.CLASS]
        }
    });
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors }
    } = methods;
    const currentClass = watch("class");

    if (isLoading) {
        return (
            <section>
                <Loading message={"Loading classes..."} />
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
                    <PageHeading>Choose your Class</PageHeading>
                    <Select
                        label={"Class"}
                        errorMessage={errors?.class?.message}
                        {...register("class", {
                            required: "This field is required"
                        })}
                    >
                        <option value={""} disabled>
                            Please select a class
                        </option>
                        {data.results.map((klass) => (
                            <option key={klass.index} value={klass.index}>
                                {klass.name}
                            </option>
                        ))}
                    </Select>
                    {currentClass && currentClass !== "" ? (
                        <ClassChoicesForm classIndex={currentClass} />
                    ) : null}
                    <ButtonGroup>
                        <Button type={"button"} onClick={goBack}>Back</Button>
                        <Button type={"submit"}>Next</Button>
                    </ButtonGroup>
                </StepForm>
            </FormProvider>
        </section>
    );
}
