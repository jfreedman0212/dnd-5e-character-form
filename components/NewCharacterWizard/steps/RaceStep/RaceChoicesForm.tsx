import { useQuery } from "react-query";
import Loading from "../../../utils/Loading";
import { useFormContext, useWatch } from "react-hook-form";
import React from "react";
import Select from "../../../forms/Select";
import { Race } from "../../../../lib/frontend/dnd5e_api/types";
import RaceChildForm from "./RaceChildForm";
import { queryKeys } from "../../../../lib/frontend/query_keys";

type RaceChoicesFormProps = Readonly<{
    raceIndex: string;
}>;

export default function RaceChoicesForm({ raceIndex }: RaceChoicesFormProps) {
    const {
        register,
        formState: { errors },
        reset
    } = useFormContext();

    const watchSubRace = useWatch({ name: "subrace" });

    const { data, status } = useQuery<Race>({
        queryKey: queryKeys.race(raceIndex),
        onSuccess: (successfulData) => {
            const {
                speed,
                ability_bonuses,
                languages,
                size,
                traits,
                starting_proficiencies
            } = successfulData;
            reset({
                race: raceIndex,
                speed,
                size,
                abilityScoreBonus: ability_bonuses.reduce(
                    (previous, { ability_score, bonus }) => {
                        return {
                            ...previous,
                            [ability_score.index]: bonus
                        };
                    },
                    {}
                ),
                alignment: "",
                languages: languages.map((language) => language.index),
                languageOptions: [],
                traits: traits.map((trait) => trait.index),
                proficiencies: starting_proficiencies.map((x) => x.index),
                proficiencyChoices: []
            });
        },
        // only refetch when raceIndex changes and NEVER at another time
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });

    if (status === "loading") {
        return <Loading />;
    } else if (status === "error") {
        throw new Error(
            `Could not load ${raceIndex}! This is most likely an issue with the D&D API.`
        );
    } else if (status === "idle") {
        throw new Error(
            `Race query for ${raceIndex} is idle. This is an application issue.`
        );
    }

    const hasSubraces = data.subraces.length > 0;

    console.log("hasSubraces", hasSubraces);
    console.log("watchSubRace", watchSubRace);

    return (
        <>
            {hasSubraces ? (
                <Select
                    label={"Subrace"}
                    {...register("subrace", {
                        required: "This field is required."
                    })}
                    defaultValue={""}
                    errorMessage={errors?.subrace?.message}
                >
                    <option value={""} disabled>
                        Please select a subrace
                    </option>
                    {data.subraces.map((subrace) => (
                        <option key={subrace.index} value={subrace.index}>
                            {subrace.name}
                        </option>
                    ))}
                </Select>
            ) : null}
            {!hasSubraces || watchSubRace ? (
                <RaceChildForm
                    abilityBonuses={data.ability_bonuses}
                    languages={data.languages}
                    languageOptions={data.language_options}
                    languageDescription={data.language_desc}
                    sizeDescription={data.size_description}
                    ageDescription={data.age}
                    traits={data.traits}
                    traitOptions={data.trait_options}
                    alignmentDescription={data.alignment}
                    startingProficiencies={data.starting_proficiencies}
                />
            ) : null}
        </>
    );
}
