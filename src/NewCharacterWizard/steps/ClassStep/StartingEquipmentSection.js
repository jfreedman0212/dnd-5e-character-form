import FieldSet from "../../../FieldSet";
import OptionCheckboxField from "../../../OptionCheckboxField";

export default function StartingEquipmentSection({
  startingEquipment,
  startingEquipmentOptions,
  register
}) {
  return (
    <FieldSet>
      <legend>Starting Equipment</legend>
      <FieldSet disabled>
        <legend>Defaults (cannot be changed)</legend>
        {startingEquipment.map(({ equipment }) => (
          <OptionCheckboxField
            key={equipment.index}
            item={equipment}
            name={"equipment"}
            register={register}
          />
        ))}
      </FieldSet>
      {startingEquipmentOptions.map((choices, index) => (
        <FieldSet key={index}>
          <legend>Choose {choices.choose}</legend>
          {choices.from.map((choice) => {
            console.log("choice", choice);
            return (
              <OptionCheckboxField
                key={choice.index}
                item={choice}
                name={"equipment"}
                register={register}
              />
            );
          })}
        </FieldSet>
      ))}
    </FieldSet>
  );
}
