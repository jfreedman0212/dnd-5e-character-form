import { useFormContext } from "react-hook-form";
import ErrorMessage from "../../forms/ErrorMessage";
import FieldSet from "../../forms/FieldSet";
import OptionCheckboxField from "../../forms/OptionCheckboxField";
import SectionHeading from "../../ui/SectionHeading";

export default function ProficienciesSection({
    proficiencies,
    proficiencyChoices
}) {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    return (
        <>
            <SectionHeading>Proficiencies</SectionHeading>
            <FieldSet disabled>
                <legend>Defaults (cannot be changed)</legend>
                {proficiencies.map((proficiency) => (
                    <OptionCheckboxField
                        key={proficiency.index}
                        item={proficiency}
                        {...register("proficiencies")}
                    />
                ))}
            </FieldSet>
            {proficiencyChoices && proficiencyChoices.length > 0
                ? proficiencyChoices.map((choices, index) => (
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
                  ))
                : null}
        </>
    );
}
