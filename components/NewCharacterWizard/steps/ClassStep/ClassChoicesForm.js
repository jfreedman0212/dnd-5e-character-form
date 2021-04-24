import { useQuery } from "react-query";
import { useFormContext } from "react-hook-form";
import Loading from "../../../utils/Loading";
import FieldSet from "../../../forms/FieldSet";
import ProficienciesSection from "../ProficienciesSection";
import OptionCheckboxField from "../../../forms/OptionCheckboxField";
import Input from "../../../forms/Input";
import SectionHeading from "../../../ui/SectionHeading";
// import StartingEquipmentSection from "./StartingEquipmentSection";

// TODO:
//  1. make StartingEquipmentSection work properly (need to check all possible data types)
//  2. style this form to not look ugly please

export default function ClassChoicesForm({ classIndex }) {
    const { register, reset } = useFormContext();
    const { data, status } = useQuery({
        queryKey: ["api", "classes", classIndex],
        onSuccess: (successfulData) => {
            const { hit_die, proficiencies, saving_throws } = successfulData;
            reset({
                class: classIndex,
                hitDie: hit_die,
                proficiencies: proficiencies.map(
                    (proficiency) => proficiency.index
                ),
                proficiencyOptions: [],
                savingThrows: saving_throws.map(
                    (savingThrow) => savingThrow.index
                )
            });
        },
        // only refetch when classIndex changes and NEVER at another time
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });

    if (status === "loading") {
        return <Loading />;
    } else if (status === "error") {
        throw new Error(
            `Could not load ${classIndex}! This is most likely an issue with the D&D API.`
        );
    } else if (status === "idle") {
        throw new Error(
            `Class query for ${classIndex} is idle. This is an application issue.`
        );
    }
    return (
        <>
            <SectionHeading>Information</SectionHeading>
            <Input label={"Hit Die"} {...register("hitDie")} readOnly />
            <FieldSet disabled>
                <legend>Saving Throws</legend>
                {data.saving_throws.map((savingThrow) => (
                    <OptionCheckboxField
                        key={savingThrow.index}
                        item={savingThrow}
                        {...register("savingThrows")}
                    />
                ))}
            </FieldSet>
            <ProficienciesSection
                proficiencies={data.proficiencies}
                proficiencyChoices={data.proficiency_choices}
            />
            {/* <StartingEquipmentSection
          startingEquipment={data.starting_equipment}
          startingEquipmentOptions={data.starting_equipment_options}
          register={register}
        /> */}
        </>
    );
}
