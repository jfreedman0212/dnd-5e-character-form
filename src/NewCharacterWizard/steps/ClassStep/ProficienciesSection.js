import FieldSet from "../../../FieldSet";
import OptionCheckboxField from "./OptionCheckboxField";

export default function ProficienciesSection({
  proficiencies,
  proficiencyChoices,
  register
}) {
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
        </FieldSet>
      ))}
    </FieldSet>
  );
}
