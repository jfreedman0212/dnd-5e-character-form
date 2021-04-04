import PageHeading from "../../../ui/PageHeading";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import StepForm from "../StepForm";
import { useForm, FormProvider } from "react-hook-form";

export default function AbilityScoreStep({ defaultValue, dispatch }) {
    const methods = useForm({
        defaultValues: {
            cha: defaultValue.cha || ""
        }
    });
    const { register, handleSubmit } = methods;
    function goBack() {
        dispatch({ type: "GO_BACK" });
    }

    function submitForm(data) {
        dispatch({ type: "ABILITY_SCORE_STEP", payload: data });
    }

    return (
        <section>
            <FormProvider {...methods}>
                <StepForm onSubmit={handleSubmit(submitForm)}>
                    <PageHeading>Choose your Ability Scores</PageHeading>
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
