import { useFormContext } from "react-hook-form";
import FieldSet from "../../../FieldSet";
import OptionCheckboxField from "../../../OptionCheckboxField";

export default function ProficienciesSection({
  proficiencies,
  proficiencyChoices
}) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <FieldSet>
      <legend>Proficiencies</legend>
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
      {proficiencyChoices.map((choices, index) => (
        <FieldSet key={index}>
          <legend>Choose {choices.choose}</legend>
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
          {errors?.proficiencyOptions?.[index]?.message ? (
            <p>{errors.proficiencyOptions[index].message}</p>
          ) : null}
        </FieldSet>
      ))}
    </FieldSet>
  );
}
