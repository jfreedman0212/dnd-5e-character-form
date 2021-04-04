import { useQuery } from "react-query";
import { FormProvider, useForm } from "react-hook-form";
import Loading from "../../../utils/Loading";
import ClassChoicesForm from "./ClassChoicesForm";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import Select from "../../../forms/Select";
import StepForm from "../StepForm";
import PageHeading from "../../../ui/PageHeading";

export default function ClassStep({ defaultValue, dispatch }) {
    const { data, isLoading, isError } = useQuery(["api", "classes"]);
    const methods = useForm({
        defaultValues: {
            class: defaultValue.class || "",
            hitDie: defaultValue.hitDie || "",
            proficiencies: defaultValue.proficiencies || [],
            proficiencyOptions: defaultValue.proficiencyOptions || [],
            equipment: defaultValue.equipment || [],
            savingThrows: defaultValue.savingThrows || []
        }
    });
    const { handleSubmit, register, watch, formState: {errors} } = methods;
    const currentClass = watch("class");

    function onSubmit(data) {
        dispatch({ type: "CLASS_STEP", payload: data });
    }

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
                <StepForm onSubmit={handleSubmit(onSubmit)}>
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
                        <Button type={"submit"}>Next</Button>
                    </ButtonGroup>
                </StepForm>
            </FormProvider>
        </section>
    );
}
