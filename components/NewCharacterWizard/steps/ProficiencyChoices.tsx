import { useFormContext } from "react-hook-form";
import FieldSet from "../../forms/FieldSet";
import ErrorMessage from "../../forms/ErrorMessage";
import OptionCheckboxField from "../../forms/OptionCheckboxField";
import { Choice } from "../../../lib/frontend/dnd5e_api/types";

type ProficiencyChoicesProps = Readonly<{
    proficiencyChoices: Choice[];
}>;

export default function ProficiencyChoices({ proficiencyChoices }: ProficiencyChoicesProps) {
    const {
        register,
        formState: { errors }
    } = useFormContext();
    return (
        <>
            {proficiencyChoices.map((choices, index) => (
                <FieldSet key={index}>
                    <legend>Choose {choices.choose}</legend>
                    {errors?.proficiencyOptions?.[index]?.message ? (
                        <ErrorMessage>
                            {errors.proficiencyOptions[index].message}
                        </ErrorMessage>
                    ) : null}
                    {choices.from.map((choice) => (
                        <OptionCheckboxField
                            key={choice.index}
                            item={choice}
                            {...register(`proficiencyOptions.${index}`, {
                                validate: (data) =>
                                    data.length === choices.choose ||
                                    `Must choose exactly ${choices.choose}`
                            })}
                        />
                    ))}
                </FieldSet>
            ))}
        </>
    );
}
